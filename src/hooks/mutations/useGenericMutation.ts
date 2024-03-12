import { useQueryClient, useMutation } from '@tanstack/react-query';

interface useGenericProps<TVariables, TData, TContext> {
  queryKey: string[];
  mutationFn: (variables: TVariables) => Promise<TData>;
  onMutate: (variables: TVariables) => Promise<TContext | void> | TContext | void;
}

const useGenericMutation = <TVariables, TData, TContext>({
  queryKey,
  mutationFn,
  onMutate: updated,
}: useGenericProps<TVariables, TData, TContext>) => {
  const queryClient = useQueryClient();

  return useMutation<TData, unknown, TVariables, { previousData?: TData }>({
    mutationFn,
    async onMutate(variables) {
      await queryClient.cancelQueries({ queryKey });
      const previousData = queryClient.getQueryData<TData>(queryKey);

      if (updated) {
        queryClient.setQueryData(queryKey, updated(variables));
      }

      return { previousData };
    },

    onError(error, variables, context) {
      if (context?.previousData) {
        queryClient.setQueryData(queryKey, context.previousData);
      }
    },

    onSettled() {
      queryClient.invalidateQueries({ queryKey });
    },
  });
};

export default useGenericMutation;
