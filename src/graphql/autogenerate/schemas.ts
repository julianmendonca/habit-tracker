export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  date: any;
  timestamptz: any;
  timetz: any;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['date']>;
  _gt?: InputMaybe<Scalars['date']>;
  _gte?: InputMaybe<Scalars['date']>;
  _in?: InputMaybe<Array<Scalars['date']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['date']>;
  _lte?: InputMaybe<Scalars['date']>;
  _neq?: InputMaybe<Scalars['date']>;
  _nin?: InputMaybe<Array<Scalars['date']>>;
};

/** columns and relationships of "habit" */
export type Habit = {
  __typename?: 'habit';
  created_at?: Maybe<Scalars['date']>;
  habit_id: Scalars['Int'];
  habit_type?: Maybe<Habit_Type_Enum>;
  name: Scalars['String'];
  time_created: Scalars['timetz'];
  /** An object relationship */
  user?: Maybe<Users>;
  user_id: Scalars['Int'];
};

/** aggregated selection of "habit" */
export type Habit_Aggregate = {
  __typename?: 'habit_aggregate';
  aggregate?: Maybe<Habit_Aggregate_Fields>;
  nodes: Array<Habit>;
};

/** aggregate fields of "habit" */
export type Habit_Aggregate_Fields = {
  __typename?: 'habit_aggregate_fields';
  avg?: Maybe<Habit_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Habit_Max_Fields>;
  min?: Maybe<Habit_Min_Fields>;
  stddev?: Maybe<Habit_Stddev_Fields>;
  stddev_pop?: Maybe<Habit_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Habit_Stddev_Samp_Fields>;
  sum?: Maybe<Habit_Sum_Fields>;
  var_pop?: Maybe<Habit_Var_Pop_Fields>;
  var_samp?: Maybe<Habit_Var_Samp_Fields>;
  variance?: Maybe<Habit_Variance_Fields>;
};


/** aggregate fields of "habit" */
export type Habit_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Habit_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Habit_Avg_Fields = {
  __typename?: 'habit_avg_fields';
  habit_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "habit". All fields are combined with a logical 'AND'. */
export type Habit_Bool_Exp = {
  _and?: InputMaybe<Array<Habit_Bool_Exp>>;
  _not?: InputMaybe<Habit_Bool_Exp>;
  _or?: InputMaybe<Array<Habit_Bool_Exp>>;
  created_at?: InputMaybe<Date_Comparison_Exp>;
  habit_id?: InputMaybe<Int_Comparison_Exp>;
  habit_type?: InputMaybe<Habit_Type_Enum_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  time_created?: InputMaybe<Timetz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "habit" */
export enum Habit_Constraint {
  /** unique or primary key constraint */
  HabitPkey = 'habit_pkey'
}

/** input type for incrementing numeric columns in table "habit" */
export type Habit_Inc_Input = {
  habit_id?: InputMaybe<Scalars['Int']>;
  user_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "habit" */
export type Habit_Insert_Input = {
  created_at?: InputMaybe<Scalars['date']>;
  habit_id?: InputMaybe<Scalars['Int']>;
  habit_type?: InputMaybe<Habit_Type_Enum>;
  name?: InputMaybe<Scalars['String']>;
  time_created?: InputMaybe<Scalars['timetz']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Habit_Max_Fields = {
  __typename?: 'habit_max_fields';
  created_at?: Maybe<Scalars['date']>;
  habit_id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  time_created?: Maybe<Scalars['timetz']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Habit_Min_Fields = {
  __typename?: 'habit_min_fields';
  created_at?: Maybe<Scalars['date']>;
  habit_id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  time_created?: Maybe<Scalars['timetz']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "habit" */
export type Habit_Mutation_Response = {
  __typename?: 'habit_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Habit>;
};

/** on conflict condition type for table "habit" */
export type Habit_On_Conflict = {
  constraint: Habit_Constraint;
  update_columns?: Array<Habit_Update_Column>;
  where?: InputMaybe<Habit_Bool_Exp>;
};

/** Ordering options when selecting data from "habit". */
export type Habit_Order_By = {
  created_at?: InputMaybe<Order_By>;
  habit_id?: InputMaybe<Order_By>;
  habit_type?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  time_created?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: habit */
export type Habit_Pk_Columns_Input = {
  habit_id: Scalars['Int'];
};

/** select columns of table "habit" */
export enum Habit_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  HabitId = 'habit_id',
  /** column name */
  HabitType = 'habit_type',
  /** column name */
  Name = 'name',
  /** column name */
  TimeCreated = 'time_created',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "habit" */
export type Habit_Set_Input = {
  created_at?: InputMaybe<Scalars['date']>;
  habit_id?: InputMaybe<Scalars['Int']>;
  habit_type?: InputMaybe<Habit_Type_Enum>;
  name?: InputMaybe<Scalars['String']>;
  time_created?: InputMaybe<Scalars['timetz']>;
  user_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Habit_Stddev_Fields = {
  __typename?: 'habit_stddev_fields';
  habit_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Habit_Stddev_Pop_Fields = {
  __typename?: 'habit_stddev_pop_fields';
  habit_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Habit_Stddev_Samp_Fields = {
  __typename?: 'habit_stddev_samp_fields';
  habit_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Habit_Sum_Fields = {
  __typename?: 'habit_sum_fields';
  habit_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** columns and relationships of "habit_type" */
export type Habit_Type = {
  __typename?: 'habit_type';
  name: Scalars['String'];
};

/** aggregated selection of "habit_type" */
export type Habit_Type_Aggregate = {
  __typename?: 'habit_type_aggregate';
  aggregate?: Maybe<Habit_Type_Aggregate_Fields>;
  nodes: Array<Habit_Type>;
};

/** aggregate fields of "habit_type" */
export type Habit_Type_Aggregate_Fields = {
  __typename?: 'habit_type_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Habit_Type_Max_Fields>;
  min?: Maybe<Habit_Type_Min_Fields>;
};


/** aggregate fields of "habit_type" */
export type Habit_Type_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Habit_Type_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "habit_type". All fields are combined with a logical 'AND'. */
export type Habit_Type_Bool_Exp = {
  _and?: InputMaybe<Array<Habit_Type_Bool_Exp>>;
  _not?: InputMaybe<Habit_Type_Bool_Exp>;
  _or?: InputMaybe<Array<Habit_Type_Bool_Exp>>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "habit_type" */
export enum Habit_Type_Constraint {
  /** unique or primary key constraint */
  HabitTypePkey = 'habit_type_pkey'
}

export enum Habit_Type_Enum {
  Bad = 'bad',
  Good = 'good',
  Neutral = 'neutral'
}

/** Boolean expression to compare columns of type "habit_type_enum". All fields are combined with logical 'AND'. */
export type Habit_Type_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Habit_Type_Enum>;
  _in?: InputMaybe<Array<Habit_Type_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Habit_Type_Enum>;
  _nin?: InputMaybe<Array<Habit_Type_Enum>>;
};

/** input type for inserting data into table "habit_type" */
export type Habit_Type_Insert_Input = {
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Habit_Type_Max_Fields = {
  __typename?: 'habit_type_max_fields';
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Habit_Type_Min_Fields = {
  __typename?: 'habit_type_min_fields';
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "habit_type" */
export type Habit_Type_Mutation_Response = {
  __typename?: 'habit_type_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Habit_Type>;
};

/** on conflict condition type for table "habit_type" */
export type Habit_Type_On_Conflict = {
  constraint: Habit_Type_Constraint;
  update_columns?: Array<Habit_Type_Update_Column>;
  where?: InputMaybe<Habit_Type_Bool_Exp>;
};

/** Ordering options when selecting data from "habit_type". */
export type Habit_Type_Order_By = {
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: habit_type */
export type Habit_Type_Pk_Columns_Input = {
  name: Scalars['String'];
};

/** select columns of table "habit_type" */
export enum Habit_Type_Select_Column {
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "habit_type" */
export type Habit_Type_Set_Input = {
  name?: InputMaybe<Scalars['String']>;
};

/** update columns of table "habit_type" */
export enum Habit_Type_Update_Column {
  /** column name */
  Name = 'name'
}

/** update columns of table "habit" */
export enum Habit_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  HabitId = 'habit_id',
  /** column name */
  HabitType = 'habit_type',
  /** column name */
  Name = 'name',
  /** column name */
  TimeCreated = 'time_created',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
export type Habit_Var_Pop_Fields = {
  __typename?: 'habit_var_pop_fields';
  habit_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Habit_Var_Samp_Fields = {
  __typename?: 'habit_var_samp_fields';
  habit_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Habit_Variance_Fields = {
  __typename?: 'habit_variance_fields';
  habit_id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "habit" */
  delete_habit?: Maybe<Habit_Mutation_Response>;
  /** delete single row from the table: "habit" */
  delete_habit_by_pk?: Maybe<Habit>;
  /** delete data from the table: "habit_type" */
  delete_habit_type?: Maybe<Habit_Type_Mutation_Response>;
  /** delete single row from the table: "habit_type" */
  delete_habit_type_by_pk?: Maybe<Habit_Type>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "habit" */
  insert_habit?: Maybe<Habit_Mutation_Response>;
  /** insert a single row into the table: "habit" */
  insert_habit_one?: Maybe<Habit>;
  /** insert data into the table: "habit_type" */
  insert_habit_type?: Maybe<Habit_Type_Mutation_Response>;
  /** insert a single row into the table: "habit_type" */
  insert_habit_type_one?: Maybe<Habit_Type>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "habit" */
  update_habit?: Maybe<Habit_Mutation_Response>;
  /** update single row of the table: "habit" */
  update_habit_by_pk?: Maybe<Habit>;
  /** update data of the table: "habit_type" */
  update_habit_type?: Maybe<Habit_Type_Mutation_Response>;
  /** update single row of the table: "habit_type" */
  update_habit_type_by_pk?: Maybe<Habit_Type>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
};


/** mutation root */
export type Mutation_RootDelete_HabitArgs = {
  where: Habit_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Habit_By_PkArgs = {
  habit_id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Habit_TypeArgs = {
  where: Habit_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Habit_Type_By_PkArgs = {
  name: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootInsert_HabitArgs = {
  objects: Array<Habit_Insert_Input>;
  on_conflict?: InputMaybe<Habit_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Habit_OneArgs = {
  object: Habit_Insert_Input;
  on_conflict?: InputMaybe<Habit_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Habit_TypeArgs = {
  objects: Array<Habit_Type_Insert_Input>;
  on_conflict?: InputMaybe<Habit_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Habit_Type_OneArgs = {
  object: Habit_Type_Insert_Input;
  on_conflict?: InputMaybe<Habit_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_HabitArgs = {
  _inc?: InputMaybe<Habit_Inc_Input>;
  _set?: InputMaybe<Habit_Set_Input>;
  where: Habit_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Habit_By_PkArgs = {
  _inc?: InputMaybe<Habit_Inc_Input>;
  _set?: InputMaybe<Habit_Set_Input>;
  pk_columns: Habit_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Habit_TypeArgs = {
  _set?: InputMaybe<Habit_Type_Set_Input>;
  where: Habit_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Habit_Type_By_PkArgs = {
  _set?: InputMaybe<Habit_Type_Set_Input>;
  pk_columns: Habit_Type_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _inc?: InputMaybe<Users_Inc_Input>;
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _inc?: InputMaybe<Users_Inc_Input>;
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "habit" */
  habit: Array<Habit>;
  /** fetch aggregated fields from the table: "habit" */
  habit_aggregate: Habit_Aggregate;
  /** fetch data from the table: "habit" using primary key columns */
  habit_by_pk?: Maybe<Habit>;
  /** fetch data from the table: "habit_type" */
  habit_type: Array<Habit_Type>;
  /** fetch aggregated fields from the table: "habit_type" */
  habit_type_aggregate: Habit_Type_Aggregate;
  /** fetch data from the table: "habit_type" using primary key columns */
  habit_type_by_pk?: Maybe<Habit_Type>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Query_RootHabitArgs = {
  distinct_on?: InputMaybe<Array<Habit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Habit_Order_By>>;
  where?: InputMaybe<Habit_Bool_Exp>;
};


export type Query_RootHabit_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Habit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Habit_Order_By>>;
  where?: InputMaybe<Habit_Bool_Exp>;
};


export type Query_RootHabit_By_PkArgs = {
  habit_id: Scalars['Int'];
};


export type Query_RootHabit_TypeArgs = {
  distinct_on?: InputMaybe<Array<Habit_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Habit_Type_Order_By>>;
  where?: InputMaybe<Habit_Type_Bool_Exp>;
};


export type Query_RootHabit_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Habit_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Habit_Type_Order_By>>;
  where?: InputMaybe<Habit_Type_Bool_Exp>;
};


export type Query_RootHabit_Type_By_PkArgs = {
  name: Scalars['String'];
};


export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  id: Scalars['Int'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "habit" */
  habit: Array<Habit>;
  /** fetch aggregated fields from the table: "habit" */
  habit_aggregate: Habit_Aggregate;
  /** fetch data from the table: "habit" using primary key columns */
  habit_by_pk?: Maybe<Habit>;
  /** fetch data from the table: "habit_type" */
  habit_type: Array<Habit_Type>;
  /** fetch aggregated fields from the table: "habit_type" */
  habit_type_aggregate: Habit_Type_Aggregate;
  /** fetch data from the table: "habit_type" using primary key columns */
  habit_type_by_pk?: Maybe<Habit_Type>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Subscription_RootHabitArgs = {
  distinct_on?: InputMaybe<Array<Habit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Habit_Order_By>>;
  where?: InputMaybe<Habit_Bool_Exp>;
};


export type Subscription_RootHabit_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Habit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Habit_Order_By>>;
  where?: InputMaybe<Habit_Bool_Exp>;
};


export type Subscription_RootHabit_By_PkArgs = {
  habit_id: Scalars['Int'];
};


export type Subscription_RootHabit_TypeArgs = {
  distinct_on?: InputMaybe<Array<Habit_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Habit_Type_Order_By>>;
  where?: InputMaybe<Habit_Type_Bool_Exp>;
};


export type Subscription_RootHabit_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Habit_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Habit_Type_Order_By>>;
  where?: InputMaybe<Habit_Type_Bool_Exp>;
};


export type Subscription_RootHabit_Type_By_PkArgs = {
  name: Scalars['String'];
};


export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['Int'];
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** Boolean expression to compare columns of type "timetz". All fields are combined with logical 'AND'. */
export type Timetz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timetz']>;
  _gt?: InputMaybe<Scalars['timetz']>;
  _gte?: InputMaybe<Scalars['timetz']>;
  _in?: InputMaybe<Array<Scalars['timetz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timetz']>;
  _lte?: InputMaybe<Scalars['timetz']>;
  _neq?: InputMaybe<Scalars['timetz']>;
  _nin?: InputMaybe<Array<Scalars['timetz']>>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  Image_url?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  google_id: Scalars['String'];
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  avg?: Maybe<Users_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
  stddev?: Maybe<Users_Stddev_Fields>;
  stddev_pop?: Maybe<Users_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Users_Stddev_Samp_Fields>;
  sum?: Maybe<Users_Sum_Fields>;
  var_pop?: Maybe<Users_Var_Pop_Fields>;
  var_samp?: Maybe<Users_Var_Samp_Fields>;
  variance?: Maybe<Users_Variance_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Users_Avg_Fields = {
  __typename?: 'users_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  Image_url?: InputMaybe<String_Comparison_Exp>;
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  google_id?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint */
  UsersGoogleIdKey = 'users_google_id_key',
  /** unique or primary key constraint */
  UsersPkey = 'users_pkey'
}

/** input type for incrementing numeric columns in table "users" */
export type Users_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  Image_url?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  email?: InputMaybe<Scalars['String']>;
  google_id?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  Image_url?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  google_id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  Image_url?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  google_id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** on conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  Image_url?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  google_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  ImageUrl = 'Image_url',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  GoogleId = 'google_id',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  Image_url?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  email?: InputMaybe<Scalars['String']>;
  google_id?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Users_Stddev_Fields = {
  __typename?: 'users_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Users_Stddev_Pop_Fields = {
  __typename?: 'users_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Users_Stddev_Samp_Fields = {
  __typename?: 'users_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Users_Sum_Fields = {
  __typename?: 'users_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  ImageUrl = 'Image_url',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  GoogleId = 'google_id',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** aggregate var_pop on columns */
export type Users_Var_Pop_Fields = {
  __typename?: 'users_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Users_Var_Samp_Fields = {
  __typename?: 'users_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Users_Variance_Fields = {
  __typename?: 'users_variance_fields';
  id?: Maybe<Scalars['Float']>;
};
