'use client'
import Button from '@/shared/components/button/Button'
import TextInput from '@/shared/components/inputs/TextInput'
import Heading from '@/shared/components/text/Heading'
import Link from 'next/link'
import SignupFieldSearchAddres from './SignupFieldSearchAddress'
import countries from 'world-countries'
import SearchAndSelect from '@/shared/components/inputs/SearchAndSelect'
import { useState } from 'react'
import { clipText } from '@/shared/utils/clipText'

export default function SignupFormContent() {
  const [countriesData, setCountriesData] = useState(countries)
  const [selectedCountryCode, setSelectedCountryCode] = useState('')
  return (
    <div className="h-full space-y-6 bg-white px-8 py-8">
      <Heading text="Get Started" />
      <Link href={'/signin'} className="block w-fit font-medium underline">
        Already have an account ?
      </Link>
      <div className="space-y-8">
        <SignupFieldSearchAddres />

        <div className="space-y-2">
          <label htmlFor="storeName" className="font-medium">
            Store name
          </label>
          <TextInput
            className="h-[3rem]"
            px="px-3"
            id="storeName"
            placeHolder="Example: Sam`s Eru - 123 street "
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="brandName" className="font-medium">
            Store name
          </label>
          <TextInput
            className="h-[3rem]"
            px="px-3"
            id="brandName"
            placeHolder="Example: Sam`s Eru "
          />
        </div>

        <div className="flex items-center gap-x-4">
          <div className="w-full space-y-2">
            <label htmlFor="firstName" className="font-medium">
              First name
            </label>
            <TextInput className="h-[3rem]" px="px-3" id="firstName" />
          </div>
          <div className="w-full space-y-2">
            <label htmlFor="lastName" className="font-medium">
              Last name
            </label>
            <TextInput className="h-[3rem]" px="px-3" id="lastName" />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="font-medium">
            Email
          </label>
          <TextInput className="h-[3rem]" px="px-3" id="email" />
        </div>

        <div className="flex flex-col justify-center gap-y-2">
          <label htmlFor="email" className="font-medium">
            Mobile phone number
          </label>
          <div className="flex w-full items-center gap-x-4">
            <div className="w-[20%] space-y-2">
              <SearchAndSelect
                width="w-[25rem]"
                id="searchCountryCode"
                data={countriesData.map((el, i) => ({
                  display: `${el.flag}`,
                  styleDisplay: (
                    <div className="flex items-center justify-between">
                      <span>{el.flag}</span>{' '}
                      <span>{clipText(el.name.official, 30)}</span>
                      <span>
                        {el.idd.root}
                        {el.idd.suffixes.at(0)}
                      </span>
                    </div>
                  ),
                  data: el,
                }))}
                filterCallback={(filter: string) => {
                  const filtered = countries.filter((el) =>
                    el.name.official
                      .toLocaleLowerCase()
                      .includes(filter.toLocaleLowerCase())
                  )
                  setCountriesData(filtered)
                }}
                getSelectedValue={(selectedCountry) => {
                  const el = selectedCountry.data
                  setSelectedCountryCode(
                    `${el.idd.root}${el.idd.suffixes.at(0)}`
                  )
                  console.log('selected country ', selectedCountry)
                }}
              />
            </div>

            <div className="bg-background flex w-full items-center gap-x-1 overflow-hidden rounded-lg border-2 border-solid border-transparent focus-within:border-black focus-within:bg-white">
              <span>{selectedCountryCode}</span>
              <input
                type="text"
                className="h-12 w-full border-transparent bg-inherit px-3 focus:outline-none"
              />
            </div>
          </div>
        </div>

        <div>
          <Button
            px="w-full"
            color="bg-secondary"
            hoverColor="hover:bg-secondaryTint"
            textColor="text-white"
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  )
}
