import { useQueryClient, useMutation } from '@tanstack/react-query';

interface useGenericProps<TVariables, TData, TContext> {
  queryKey: string[];
  mutationFn: (variables: TVariables) => Promise<TData>;
  onMutate: (variables: TVariables) => Promise<TContext | void> | TContext | void;
}

const useGenericMutation = <TVariables, TData, TContext>({
  queryKey,
  mutationFn,
  onMutate,
}: useGenericProps<TVariables, TData, TContext>) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn,
    async onMutate(variables) {
      await queryClient.cancelQueries({ queryKey });
      const previousData = queryClient.getQueryData(queryKey);

      if (onMutate) {
        queryClient.setQueryData(queryKey, onMutate(variables));
      }

      return { previousData };
    },

    onError() {
      queryClient.setQueryData(queryKey, onMutate);
    },

    onSettled() {
      queryClient.invalidateQueries({ queryKey: queryKey });
    },
  });
};

export default useGenericMutation;
