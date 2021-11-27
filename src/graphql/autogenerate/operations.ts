import * as Types from './schemas';

export type InsertHabitMutationVariables = Types.Exact<{
  userId: Types.Scalars['Int'];
  name: Types.Scalars['String'];
  habitType: Types.Habit_Type_Enum;
  time?: Types.InputMaybe<Types.Scalars['timetz']>;
}>;


export type InsertHabitMutation = { __typename?: 'mutation_root', insert_habit_one?: { __typename?: 'habit', habit_id: number, name: string, created_at?: any | null | undefined, habit_type?: Types.Habit_Type_Enum | null | undefined, time_created: any, user_id: number } | null | undefined };

export type DeleteHabitByPkMutationVariables = Types.Exact<{
  habitId: Types.Scalars['Int'];
}>;


export type DeleteHabitByPkMutation = { __typename?: 'mutation_root', delete_habit_by_pk?: { __typename?: 'habit', habit_id: number } | null | undefined };

export type GetHabitsByUserIdAndDateQueryVariables = Types.Exact<{
  userId: Types.Scalars['Int'];
  date: Types.Scalars['date'];
  offset?: Types.InputMaybe<Types.Scalars['Int']>;
}>;


export type GetHabitsByUserIdAndDateQuery = { __typename?: 'query_root', habit: Array<{ __typename?: 'habit', habit_id: number, created_at?: any | null | undefined, name: string, time_created: any, habit_type?: Types.Habit_Type_Enum | null | undefined, user_id: number }> };

export type InsertUserMutationVariables = Types.Exact<{
  name: Types.Scalars['String'];
  imageUrl?: Types.InputMaybe<Types.Scalars['String']>;
  googleId: Types.Scalars['String'];
  email?: Types.InputMaybe<Types.Scalars['String']>;
}>;


export type InsertUserMutation = { __typename?: 'mutation_root', insert_users?: { __typename?: 'users_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'users', id: number, name?: string | null | undefined, google_id: string, Image_url?: string | null | undefined, created_at?: any | null | undefined, email?: string | null | undefined }> } | null | undefined };

export type GetUserByGoogleIdQueryVariables = Types.Exact<{
  googleId: Types.Scalars['String'];
}>;


export type GetUserByGoogleIdQuery = { __typename?: 'query_root', users: Array<{ __typename?: 'users', id: number, name?: string | null | undefined, Image_url?: string | null | undefined, email?: string | null | undefined }> };

export type GetUsersQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetUsersQuery = { __typename?: 'query_root', users: Array<{ __typename?: 'users', id: number }> };
