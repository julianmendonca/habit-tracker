import * as Types from './operations';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}

export const InsertHabitDocument = gql`
    mutation InsertHabit($userId: Int!, $name: String!, $time: timestamptz, $habitType: habit_type_enum!) {
  insert_habit_one(
    object: {user_id: $userId, name: $name, habit_type: $habitType}
  ) {
    habit_id
    name
    created_at
    habit_type
    time_created
    user_id
  }
}
    `;
export type InsertHabitMutationFn = Apollo.MutationFunction<Types.InsertHabitMutation, Types.InsertHabitMutationVariables>;

/**
 * __useInsertHabitMutation__
 *
 * To run a mutation, you first call `useInsertHabitMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertHabitMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertHabitMutation, { data, loading, error }] = useInsertHabitMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *      name: // value for 'name'
 *      time: // value for 'time'
 *      habitType: // value for 'habitType'
 *   },
 * });
 */
export function useInsertHabitMutation(baseOptions?: Apollo.MutationHookOptions<Types.InsertHabitMutation, Types.InsertHabitMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Types.InsertHabitMutation, Types.InsertHabitMutationVariables>(InsertHabitDocument, options);
      }
export type InsertHabitMutationHookResult = ReturnType<typeof useInsertHabitMutation>;
export type InsertHabitMutationResult = Apollo.MutationResult<Types.InsertHabitMutation>;
export type InsertHabitMutationOptions = Apollo.BaseMutationOptions<Types.InsertHabitMutation, Types.InsertHabitMutationVariables>;
export const GetHabitsByUserIdAndDateDocument = gql`
    query GetHabitsByUserIdAndDate($userId: Int!, $date: date!) {
  habit(where: {user_id: {_eq: $userId}, created_at: {_eq: $date}}) {
    habit_id
    created_at
    name
    time_created
    habit_type
  }
}
    `;

/**
 * __useGetHabitsByUserIdAndDateQuery__
 *
 * To run a query within a React component, call `useGetHabitsByUserIdAndDateQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetHabitsByUserIdAndDateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetHabitsByUserIdAndDateQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *      date: // value for 'date'
 *   },
 * });
 */
export function useGetHabitsByUserIdAndDateQuery(baseOptions: Apollo.QueryHookOptions<Types.GetHabitsByUserIdAndDateQuery, Types.GetHabitsByUserIdAndDateQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Types.GetHabitsByUserIdAndDateQuery, Types.GetHabitsByUserIdAndDateQueryVariables>(GetHabitsByUserIdAndDateDocument, options);
      }
export function useGetHabitsByUserIdAndDateLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.GetHabitsByUserIdAndDateQuery, Types.GetHabitsByUserIdAndDateQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Types.GetHabitsByUserIdAndDateQuery, Types.GetHabitsByUserIdAndDateQueryVariables>(GetHabitsByUserIdAndDateDocument, options);
        }
export type GetHabitsByUserIdAndDateQueryHookResult = ReturnType<typeof useGetHabitsByUserIdAndDateQuery>;
export type GetHabitsByUserIdAndDateLazyQueryHookResult = ReturnType<typeof useGetHabitsByUserIdAndDateLazyQuery>;
export type GetHabitsByUserIdAndDateQueryResult = Apollo.QueryResult<Types.GetHabitsByUserIdAndDateQuery, Types.GetHabitsByUserIdAndDateQueryVariables>;
export function refetchGetHabitsByUserIdAndDateQuery(variables: Types.GetHabitsByUserIdAndDateQueryVariables) {
      return { query: GetHabitsByUserIdAndDateDocument, variables: variables }
    }
export const InsertUserDocument = gql`
    mutation InsertUser($name: String!, $imageUrl: String, $googleId: String!, $email: String) {
  insert_users(
    objects: {name: $name, Image_url: $imageUrl, google_id: $googleId, email: $email}
  ) {
    affected_rows
    returning {
      id
      name
      google_id
      Image_url
      created_at
      email
    }
  }
}
    `;
export type InsertUserMutationFn = Apollo.MutationFunction<Types.InsertUserMutation, Types.InsertUserMutationVariables>;

/**
 * __useInsertUserMutation__
 *
 * To run a mutation, you first call `useInsertUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertUserMutation, { data, loading, error }] = useInsertUserMutation({
 *   variables: {
 *      name: // value for 'name'
 *      imageUrl: // value for 'imageUrl'
 *      googleId: // value for 'googleId'
 *      email: // value for 'email'
 *   },
 * });
 */
export function useInsertUserMutation(baseOptions?: Apollo.MutationHookOptions<Types.InsertUserMutation, Types.InsertUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Types.InsertUserMutation, Types.InsertUserMutationVariables>(InsertUserDocument, options);
      }
export type InsertUserMutationHookResult = ReturnType<typeof useInsertUserMutation>;
export type InsertUserMutationResult = Apollo.MutationResult<Types.InsertUserMutation>;
export type InsertUserMutationOptions = Apollo.BaseMutationOptions<Types.InsertUserMutation, Types.InsertUserMutationVariables>;
export const GetUserByGoogleIdDocument = gql`
    query GetUserByGoogleId($googleId: String!) {
  users(where: {google_id: {_eq: $googleId}}) {
    id
    name
    Image_url
    email
  }
}
    `;

/**
 * __useGetUserByGoogleIdQuery__
 *
 * To run a query within a React component, call `useGetUserByGoogleIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserByGoogleIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserByGoogleIdQuery({
 *   variables: {
 *      googleId: // value for 'googleId'
 *   },
 * });
 */
export function useGetUserByGoogleIdQuery(baseOptions: Apollo.QueryHookOptions<Types.GetUserByGoogleIdQuery, Types.GetUserByGoogleIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Types.GetUserByGoogleIdQuery, Types.GetUserByGoogleIdQueryVariables>(GetUserByGoogleIdDocument, options);
      }
export function useGetUserByGoogleIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.GetUserByGoogleIdQuery, Types.GetUserByGoogleIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Types.GetUserByGoogleIdQuery, Types.GetUserByGoogleIdQueryVariables>(GetUserByGoogleIdDocument, options);
        }
export type GetUserByGoogleIdQueryHookResult = ReturnType<typeof useGetUserByGoogleIdQuery>;
export type GetUserByGoogleIdLazyQueryHookResult = ReturnType<typeof useGetUserByGoogleIdLazyQuery>;
export type GetUserByGoogleIdQueryResult = Apollo.QueryResult<Types.GetUserByGoogleIdQuery, Types.GetUserByGoogleIdQueryVariables>;
export function refetchGetUserByGoogleIdQuery(variables: Types.GetUserByGoogleIdQueryVariables) {
      return { query: GetUserByGoogleIdDocument, variables: variables }
    }
export const GetUsersDocument = gql`
    query GetUsers {
  users {
    id
  }
}
    `;

/**
 * __useGetUsersQuery__
 *
 * To run a query within a React component, call `useGetUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUsersQuery(baseOptions?: Apollo.QueryHookOptions<Types.GetUsersQuery, Types.GetUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Types.GetUsersQuery, Types.GetUsersQueryVariables>(GetUsersDocument, options);
      }
export function useGetUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.GetUsersQuery, Types.GetUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Types.GetUsersQuery, Types.GetUsersQueryVariables>(GetUsersDocument, options);
        }
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>;
export type GetUsersLazyQueryHookResult = ReturnType<typeof useGetUsersLazyQuery>;
export type GetUsersQueryResult = Apollo.QueryResult<Types.GetUsersQuery, Types.GetUsersQueryVariables>;
export function refetchGetUsersQuery(variables?: Types.GetUsersQueryVariables) {
      return { query: GetUsersDocument, variables: variables }
    }