import { ApolloQueryResult, DocumentNode, OperationVariables, QueryOptions, TypedDocumentNode } from '@apollo/client';

import { initializeApollo } from '@/lib/gql/apollo';

const apolloClient = initializeApollo();

/**
 * Document 기반의 lazyQuery를 생성하는 유틸 함수
 *
 * @example
 * createLazyQuery(Document, callback)
 */
export const createLazyQuery = <T, K extends OperationVariables>(
  Document: DocumentNode | TypedDocumentNode<T, K>,
  cb?: (result: ApolloQueryResult<T>) => void,
) => {
  return async (options: Omit<QueryOptions<K, T>, 'query'>) => {
    const result = await apolloClient.query<T, K>({
      ...options,
      query: Document,
    });

    if (cb) cb(result);

    return result;
  };
};
