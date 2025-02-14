'use client'
import CustomSelect from '@/shared/components/inputs/CustomSelect'

export default function MarketingCampaignAction() {
  return (
    <div className="w-full lg:w-[90%]">
      <CustomSelect
        inheritWidth
        width="w-full"
        height="h-[7rem]"
        data={[
          { display: 'Paused', value: 'pause' },
          { display: 'Run', value: 'run' },
          { display: 'Edit', value: 'edit' },
        ]}
        onchange={(selectedAction: string) => {
          console.log(selectedAction)
        }}
      />
    </div>
  )
}
//['Paused', 'Run', 'Edit']
