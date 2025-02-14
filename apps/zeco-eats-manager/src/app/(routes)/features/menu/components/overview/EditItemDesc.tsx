'use client'
import { ChangeEvent, useState } from 'react'
import EditOptionParent from './EditOptionParent'

export default function EditItemDesc({ description }: { description: string }) {
  const [desc, setDesc] = useState(description)
  return (
    <EditOptionParent>
      <label htmlFor="itemDesc" className="font-medium">
        Description
      </label>
      <textarea
        id="itemDesc"
        className="focus:border-secondary bg-background max-h-[15rem] min-h-[10rem] w-full resize-none rounded-lg border-2 border-solid border-transparent px-2 py-2 focus:bg-white"
        value={desc}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
          setDesc(e.target.value)
        }
      />
    </EditOptionParent>
  )
}
