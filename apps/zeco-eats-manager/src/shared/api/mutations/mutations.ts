import { createSupabaseServer } from '@zeco-eats-lib/utils-server'

export async function uploadFile(
  file: File,
  storageBucket: string,
  folder: string,
  fileName: string
): Promise<string | null> {
  try {
    const supabase = await createSupabaseServer()

    // Upload the file to Supabase storage
    const { data: storageData, error: storageError } = await supabase.storage
      .from(storageBucket)
      .upload(`${folder}/${fileName}`, file, { upsert: true })

    if (storageError || !storageData?.path) {
      throw storageError
    }

    // Get the public URL of the uploaded file
    const { data: publicUrlData } = supabase.storage
      .from(storageBucket)
      .getPublicUrl(storageData.path)

    if (!publicUrlData?.publicUrl) {
      console.error('Failed to retrieve the public URL for the uploaded file.')
      return null
    }

    return publicUrlData.publicUrl
  } catch (error) {
    console.error('Error uploading file:', error)

    return null
  }
}

export async function deleteFile(
  storageBucket: string,
  folder: string,
  fileName: string
): Promise<boolean> {
  try {
    const supabase = await createSupabaseServer()

    // Delete the file from Supabase storage
    const { error: deleteError } = await supabase.storage
      .from(storageBucket)
      .remove([`${folder}-${fileName}`])

    if (deleteError) {
      console.error('Error deleting file:', deleteError)
      return false
    }

    return true
  } catch (error) {
    console.error('Error deleting file:', error)
    return false
  }
}
