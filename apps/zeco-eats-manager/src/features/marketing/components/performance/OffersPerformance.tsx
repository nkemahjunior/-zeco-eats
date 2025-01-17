'use client'
import Heading from '@/shared/components/text/Heading'
import CustomSelect from '@/shared/components/inputs/CustomSelect'
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import CampaignStatusDot from '../createCampaign/CampaignStatusDot'

export default function OffersPerformance() {
  const testData = [
    { day: 'Nov 23', thisMonth: 500 },
    { day: 'Nov 24', thisMonth: 480 },
    { day: 'Nov 25', thisMonth: 460 },
    { day: 'Nov 26', thisMonth: 440 },
    { day: 'Nov 27', thisMonth: 420 },
    { day: 'Nov 28', thisMonth: 400 },
    { day: 'Nov 29', thisMonth: 380 },
    { day: 'Nov 30', thisMonth: 360 },
    { day: 'Dec 1', thisMonth: 350 },
    { day: 'Dec 2', thisMonth: 340 },
    { day: 'Dec 3', thisMonth: 330 },
    { day: 'Dec 4', thisMonth: 320 },
    { day: 'Dec 5', thisMonth: 340 },
    { day: 'Dec 6', thisMonth: 360 },
    { day: 'Dec 7', thisMonth: 380 },
    { day: 'Dec 8', thisMonth: 400 },
    { day: 'Dec 9', thisMonth: 420 },
    { day: 'Dec 10', thisMonth: 410 },
    { day: 'Dec 11', thisMonth: 390 },
    { day: 'Dec 12', thisMonth: 370 },
    { day: 'Dec 13', thisMonth: 350 },
    { day: 'Dec 14', thisMonth: 380 },
    { day: 'Dec 15', thisMonth: 420 },
    { day: 'Dec 16', thisMonth: 460 },
    { day: 'Dec 17', thisMonth: 480 },
    { day: 'Dec 18', thisMonth: 500 },
    { day: 'Dec 19', thisMonth: 520 },
    { day: 'Dec 20', thisMonth: 540 },
    { day: 'Dec 21', thisMonth: 580 },
    { day: 'Dec 22', thisMonth: 600 },
  ]

  return (
    <div>
      <div className="space-y-4">
        <Heading text="Offers" />
        <div className="border-backgroundBorder rounded-lg border border-solid">
          <div className="border-backgroundBorder flex items-center justify-between border-b border-solid px-16 py-6">
            <div className="flex flex-col justify-center gap-y-1">
              <span>Ad campaign</span>
              <div className="flex items-center gap-x-1">
                <CampaignStatusDot status="running" />
                <span className="text-textTint">Running</span>
              </div>
            </div>

            <div className="w-[10rem]">
              <CustomSelect
                inheritWidth
                width="w-full"
                height="h-[8rem]"
                data={[
                  { display: 'Last 7 days', value: '7days' },
                  { display: 'Last 14 days', value: '14days' },
                  { display: 'Last month', value: 'lm' },
                  {
                    display: 'custom',
                    value: 'allow the user to chose custom range',
                  },
                ]}
                onchange={(range: string) => console.log(range)}
              />
            </div>
          </div>

          <div className="grid h-[20rem] grid-cols-[40fr,60fr] gap-x-16 px-16 py-4">
            <div className="flex h-full items-center justify-between">
              <div className="space-y-2">
                <span className="block text-6xl font-medium">100£</span>
                <span className="text-textTint block">Sales from ads</span>
              </div>
              <div>
                <span className="block text-6xl font-medium">60£</span>
                <span className="text-textTint block">Money spent on ads</span>
              </div>
            </div>

            <div className="h-full w-full space-y-6">
              <p className="text-center font-medium"> Sales from offers</p>
              <ResponsiveContainer width="100%" height="80%">
                <LineChart
                  data={testData}
                  // margin={{ top: 20, right: 20, left: 40, bottom: 5 }}
                >
                  <CartesianGrid
                    horizontal={true}
                    vertical={false}
                    strokeDasharray="3 0"
                  />

                  <XAxis
                    dataKey="day"
                    stroke="black"
                    //label={{ value: "month", position: "insideBottom", offset: -5 }}
                    // tickFormatter={(value /*index*/) =>
                    //   value === testData[0].day ||
                    //   value === testData[testData.length - 1].day
                    //     ? value
                    //     : ''
                    // }
                    axisLine={false}
                    interval="preserveStartEnd"
                    tickLine={false}
                    padding={{ left: 28, right: 10 }}
                    tickMargin={10}
                  />
                  <YAxis
                    stroke="black"
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(value) => `£${value}`}
                    //label={{ value: "Sales", angle: -55, position: "insideLeft" }}
                  />
                  <Tooltip
                    formatter={(value) => `£${value}`}
                    contentStyle={{
                      backgroundColor: '#333', // Tooltip background color
                      borderRadius: '5px', // Rounded corners
                      border: 'none', // Remove border
                      color: '#fff', // Tooltip text color
                    }}
                    itemStyle={{
                      color: '#4CAF50', // Color for the tooltip item (line data point)
                    }}
                  />

                  <Line
                    type="monotone"
                    dataKey="thisMonth"
                    stroke="#FC8A06"
                    strokeWidth={2.5}
                    name="This day"
                    //activeDot={{ r: 8 }}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
