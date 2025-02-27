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
      customisation_options: {
        Row: {
          created_at: string
          id: number
          max_qty: number | null
          min_qty: number | null
          name: string | null
          price: string | null
          restaurant_id: number | null
        }
        Insert: {
          created_at?: string
          id?: number
          max_qty?: number | null
          min_qty?: number | null
          name?: string | null
          price?: string | null
          restaurant_id?: number | null
        }
        Update: {
          created_at?: string
          id?: number
          max_qty?: number | null
          min_qty?: number | null
          name?: string | null
          price?: string | null
          restaurant_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: 'customisation_options_restaurant_id_fkey'
            columns: ['restaurant_id']
            isOneToOne: false
            referencedRelation: 'restaurant'
            referencedColumns: ['id']
          },
        ]
      }
      customisations: {
        Row: {
          created_at: string
          id: number
          max_price: string | null
          max_qty: number | null
          min_price: string | null
          min_qty: number | null
          name: string | null
          restaurant_id: number | null
          type: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          max_price?: string | null
          max_qty?: number | null
          min_price?: string | null
          min_qty?: number | null
          name?: string | null
          restaurant_id?: number | null
          type?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          max_price?: string | null
          max_qty?: number | null
          min_price?: string | null
          min_qty?: number | null
          name?: string | null
          restaurant_id?: number | null
          type?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'customisations_restaurant_id_fkey'
            columns: ['restaurant_id']
            isOneToOne: false
            referencedRelation: 'restaurant'
            referencedColumns: ['id']
          },
        ]
      }
      restaurant: {
        Row: {
          created_at: string
          cuisine1: string | null
          cuisine2: string | null
          cuisine3: string | null
          delivery_fee: number | null
          id: number
          image: string | null
          lat: number | null
          location: string | null
          long: number | null
          max_avg_cook_time: number | null
          min_avg_cook_time: number | null
          min_order_price: string | null
          name: string | null
          profile_pic: string | null
          rating: number | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          cuisine1?: string | null
          cuisine2?: string | null
          cuisine3?: string | null
          delivery_fee?: number | null
          id?: number
          image?: string | null
          lat?: number | null
          location?: string | null
          long?: number | null
          max_avg_cook_time?: number | null
          min_avg_cook_time?: number | null
          min_order_price?: string | null
          name?: string | null
          profile_pic?: string | null
          rating?: number | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          cuisine1?: string | null
          cuisine2?: string | null
          cuisine3?: string | null
          delivery_fee?: number | null
          id?: number
          image?: string | null
          lat?: number | null
          location?: string | null
          long?: number | null
          max_avg_cook_time?: number | null
          min_avg_cook_time?: number | null
          min_order_price?: string | null
          name?: string | null
          profile_pic?: string | null
          rating?: number | null
          user_id?: string | null
        }
        Relationships: []
      }
      restaurant_categories: {
        Row: {
          created_at: string
          id: number
          name: string | null
          restaurant_id: number | null
        }
        Insert: {
          created_at?: string
          id?: number
          name?: string | null
          restaurant_id?: number | null
        }
        Update: {
          created_at?: string
          id?: number
          name?: string | null
          restaurant_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: 'restaurant_categories_restaurant_id_fkey'
            columns: ['restaurant_id']
            isOneToOne: false
            referencedRelation: 'restaurant'
            referencedColumns: ['id']
          },
        ]
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
      restaurant_items: {
        Row: {
          created_at: string
          desc: string | null
          id: number
          image_url: string | null
          name: string | null
          price: number | null
          restaurant_id: number | null
          vat: number | null
        }
        Insert: {
          created_at?: string
          desc?: string | null
          id?: number
          image_url?: string | null
          name?: string | null
          price?: number | null
          restaurant_id?: number | null
          vat?: number | null
        }
        Update: {
          created_at?: string
          desc?: string | null
          id?: number
          image_url?: string | null
          name?: string | null
          price?: number | null
          restaurant_id?: number | null
          vat?: number | null
        }
        Relationships: [
          {
            foreignKeyName: 'restaurant_items_restaurant_id_fkey'
            columns: ['restaurant_id']
            isOneToOne: false
            referencedRelation: 'restaurant'
            referencedColumns: ['id']
          },
        ]
      }
      restaurant_menu_all: {
        Row: {
          category_id: number | null
          created_at: string
          customisation_id: number | null
          customisation_option_id: number | null
          id: number
          item_id: number | null
          menu_id: number | null
          restaurant_id: number | null
        }
        Insert: {
          category_id?: number | null
          created_at?: string
          customisation_id?: number | null
          customisation_option_id?: number | null
          id?: number
          item_id?: number | null
          menu_id?: number | null
          restaurant_id?: number | null
        }
        Update: {
          category_id?: number | null
          created_at?: string
          customisation_id?: number | null
          customisation_option_id?: number | null
          id?: number
          item_id?: number | null
          menu_id?: number | null
          restaurant_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: 'restaurant_menu_all_category_id_fkey'
            columns: ['category_id']
            isOneToOne: false
            referencedRelation: 'restaurant_categories'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'restaurant_menu_all_customisation_id_fkey'
            columns: ['customisation_id']
            isOneToOne: false
            referencedRelation: 'customisations'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'restaurant_menu_all_customisation_option_id_fkey'
            columns: ['customisation_option_id']
            isOneToOne: false
            referencedRelation: 'customisation_options'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'restaurant_menu_all_item_id_fkey'
            columns: ['item_id']
            isOneToOne: false
            referencedRelation: 'restaurant_items'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'restaurant_menu_all_menu_id_fkey'
            columns: ['menu_id']
            isOneToOne: false
            referencedRelation: 'restaurant_menus'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'restaurant_menu_all_restaurant_id_fkey'
            columns: ['restaurant_id']
            isOneToOne: false
            referencedRelation: 'restaurant'
            referencedColumns: ['id']
          },
        ]
      }
      restaurant_menu_categories: {
        Row: {
          category_id: number
          menu_id: number
          restaurant_id: number | null
        }
        Insert: {
          category_id: number
          menu_id: number
          restaurant_id?: number | null
        }
        Update: {
          category_id?: number
          menu_id?: number
          restaurant_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: 'restaurant_menu_categories_category_id_fkey'
            columns: ['category_id']
            isOneToOne: false
            referencedRelation: 'restaurant_categories'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'restaurant_menu_categories_menu_id_fkey'
            columns: ['menu_id']
            isOneToOne: false
            referencedRelation: 'restaurant_menus'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'restaurant_menu_categories_restaurant_id_fkey'
            columns: ['restaurant_id']
            isOneToOne: false
            referencedRelation: 'restaurant'
            referencedColumns: ['id']
          },
        ]
      }
      restaurant_menu_items: {
        Row: {
          created_at: string
          item_id: number
          menu_id: number
        }
        Insert: {
          created_at?: string
          item_id: number
          menu_id: number
        }
        Update: {
          created_at?: string
          item_id?: number
          menu_id?: number
        }
        Relationships: [
          {
            foreignKeyName: 'restaurant_menu_items_item_id_fkey'
            columns: ['item_id']
            isOneToOne: false
            referencedRelation: 'restaurant_items'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'restaurant_menu_items_menu_id_fkey'
            columns: ['menu_id']
            isOneToOne: false
            referencedRelation: 'restaurant_menus'
            referencedColumns: ['id']
          },
        ]
      }
      restaurant_menus: {
        Row: {
          active: boolean | null
          created_at: string
          id: number
          name: string | null
          open_days: string | null
          restaurant_id: number | null
          time: string | null
        }
        Insert: {
          active?: boolean | null
          created_at?: string
          id?: number
          name?: string | null
          open_days?: string | null
          restaurant_id?: number | null
          time?: string | null
        }
        Update: {
          active?: boolean | null
          created_at?: string
          id?: number
          name?: string | null
          open_days?: string | null
          restaurant_id?: number | null
          time?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'restaurant_menus_restaurant_id_fkey'
            columns: ['restaurant_id']
            isOneToOne: false
            referencedRelation: 'restaurant'
            referencedColumns: ['id']
          },
        ]
      }
      restaurant_menus_categories_items: {
        Row: {
          category_id: number
          created_at: string
          item_id: number
          menu_id: number
          restaurant_id: number | null
        }
        Insert: {
          category_id: number
          created_at?: string
          item_id: number
          menu_id: number
          restaurant_id?: number | null
        }
        Update: {
          category_id?: number
          created_at?: string
          item_id?: number
          menu_id?: number
          restaurant_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: 'restaurant_menus_categories_items_category_id_fkey'
            columns: ['category_id']
            isOneToOne: false
            referencedRelation: 'restaurant_categories'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'restaurant_menus_categories_items_item_id_fkey'
            columns: ['item_id']
            isOneToOne: false
            referencedRelation: 'restaurant_items'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'restaurant_menus_categories_items_menu_id_fkey'
            columns: ['menu_id']
            isOneToOne: false
            referencedRelation: 'restaurant_menus'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'restaurant_menus_categories_items_restaurant_id_fkey'
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
