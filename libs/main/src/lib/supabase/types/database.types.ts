export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      cuisines: {
        Row: {
          created_at: string
          cuisine_name: string | null
          id: number
        }
        Insert: {
          created_at?: string
          cuisine_name?: string | null
          id?: number
        }
        Update: {
          created_at?: string
          cuisine_name?: string | null
          id?: number
        }
        Relationships: []
      }
      customer: {
        Row: {
          created_at: string
          id: number
          image: string | null
          lat: string | null
          location: string | null
          long: string | null
          name: string | null
          role: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          image?: string | null
          lat?: string | null
          location?: string | null
          long?: string | null
          name?: string | null
          role?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          image?: string | null
          lat?: string | null
          location?: string | null
          long?: string | null
          name?: string | null
          role?: string | null
        }
        Relationships: []
      }
      restaurant: {
        Row: {
          avg_cook_time: string | null
          created_at: string
          id: number
          image: string | null
          lat: string | null
          location: string | null
          long: string | null
          min_order_price: string | null
          name: string | null
          profile_pic: string | null
          user_id: string | null
        }
        Insert: {
          avg_cook_time?: string | null
          created_at?: string
          id?: number
          image?: string | null
          lat?: string | null
          location?: string | null
          long?: string | null
          min_order_price?: string | null
          name?: string | null
          profile_pic?: string | null
          user_id?: string | null
        }
        Update: {
          avg_cook_time?: string | null
          created_at?: string
          id?: number
          image?: string | null
          lat?: string | null
          location?: string | null
          long?: string | null
          min_order_price?: string | null
          name?: string | null
          profile_pic?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      restaurant_cuisines: {
        Row: {
          cuisine_id: number
          restaurant_id: number
        }
        Insert: {
          cuisine_id: number
          restaurant_id?: number
        }
        Update: {
          cuisine_id?: number
          restaurant_id?: number
        }
        Relationships: [
          {
            foreignKeyName: 'restaurant_cuisines_cuisine_id_fkey'
            columns: ['cuisine_id']
            isOneToOne: false
            referencedRelation: 'cuisines'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'restaurant_cuisines_restaurant_id_fkey'
            columns: ['restaurant_id']
            isOneToOne: false
            referencedRelation: 'restaurant'
            referencedColumns: ['id']
          },
        ]
      }
      restaurant_reviews: {
        Row: {
          created_at: string
          customer_id: number | null
          id: number
          rating: number | null
          restaurant_id: number | null
          restaurant_reply: string | null
          review: string | null
        }
        Insert: {
          created_at?: string
          customer_id?: number | null
          id?: number
          rating?: number | null
          restaurant_id?: number | null
          restaurant_reply?: string | null
          review?: string | null
        }
        Update: {
          created_at?: string
          customer_id?: number | null
          id?: number
          rating?: number | null
          restaurant_id?: number | null
          restaurant_reply?: string | null
          review?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'restaurant_reviews_customer_id_fkey'
            columns: ['customer_id']
            isOneToOne: false
            referencedRelation: 'customer'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'restaurant_reviews_id_fkey'
            columns: ['id']
            isOneToOne: true
            referencedRelation: 'restaurant'
            referencedColumns: ['id']
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, 'public'>]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema['Tables'] & PublicSchema['Views'])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions['schema']]['Tables'] &
        Database[PublicTableNameOrOptions['schema']]['Views'])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions['schema']]['Tables'] &
      Database[PublicTableNameOrOptions['schema']]['Views'])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema['Tables'] &
        PublicSchema['Views'])
    ? (PublicSchema['Tables'] &
        PublicSchema['Views'])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema['Tables']
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema['Tables']
    ? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema['Tables']
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema['Tables']
    ? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema['Enums']
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions['schema']]['Enums']
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions['schema']]['Enums'][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema['Enums']
    ? PublicSchema['Enums'][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema['CompositeTypes']
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes']
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes'][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema['CompositeTypes']
    ? PublicSchema['CompositeTypes'][PublicCompositeTypeNameOrOptions]
    : never
