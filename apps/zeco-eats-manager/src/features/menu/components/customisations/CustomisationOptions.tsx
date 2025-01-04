'use client'
import Button from '@/shared/components/button/Button'
import ButtonWithIcon from '@/shared/components/button/ButtonWithIcon'
import TextInputWithIcon from '@/shared/components/inputs/TextInputWithIcon'
import Line from '@/shared/components/Line'
import Heading from '@/shared/components/text/Heading'
import { BiPlus } from 'react-icons/bi'
import Option from './Option'

const fakeOptions = Array.from({ length: 5 })

export default function CustomisationOptions() {
  return (
    <div className="h-full w-full space-y-6">
      <div className="space-y-6">
        <Heading text="Options" />
        <p className="font-medium">Add option</p>
        <TextInputWithIcon id="searchOptionCust" />
        <ButtonWithIcon>
          <span>
            <BiPlus size={20} />
          </span>
          <span>Create a new option</span>
        </ButtonWithIcon>
      </div>
      <Line />
      <div className="space-y-4">
        {fakeOptions.map((el, i) => (
          <Option key={i} />
        ))}
      </div>
      <Button
        color=" bg-secondary"
        hoverColor="hover:bg-secondaryTint"
        px="w-full"
        textColor="text-white"
      >
        Save
      </Button>
    </div>
  )
}
