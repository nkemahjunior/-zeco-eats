import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import '../globals.css'
import ModalProvider from '@/shared/context/modal/ModalProvider'
import Modal from '@/shared/components/modal/Modal'
import ModalUrl from '@/shared/components/modal/ModalUrl'
import ModalUrlProvider from '@/shared/context/modal/ModalUrlProvider'
import RestaurantStatusProvider from '@/shared/context/modal/RestaurantStatusProvider'
import Navigation from '@/shared/components/nav/Navigation'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'zeco-eats-businesses',
  description:
    'A platform for business owners to manage orders, menus, and analytics on Zeco Eats',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} text-sm antialiased`}
      >
        <RestaurantStatusProvider>
          <ModalProvider>
            <ModalUrlProvider>
              <Modal />
              <ModalUrl />
              <div className="sticky top-0 z-[10] w-full bg-white">
                <Navigation />
              </div>
              <div className="px-4 py-4 md:px-16 lg:ml-[12rem] lg:px-8 lg:pb-[3rem] lg:pt-[1rem] 2xl:ml-[15rem] 2xl:px-28">
                {/* {children} */} Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Repudiandae, aut consequatur! Hic ex delectus
                iusto voluptatum laudantium, blanditiis animi eos at sit debitis
                fuga voluptate accusamus distinctio eligendi, doloribus rerum
                dolores illum error praesentium eaque ratione ipsam nam, eius
                laborum. Quaerat pariatur deserunt facere tempore illo obcaecati
                ut impedit, provident, eos doloremque numquam quod sit ullam
                voluptas nostrum ea fugit harum nobis, vero saepe? Debitis quo,
                doloribus fugit perspiciatis illo modi delectus fugiat officiis,
                quisquam recusandae quasi ipsum voluptatem reprehenderit dicta
                dolore voluptatum tenetur repellat obcaecati? Asperiores
                pariatur eius, et quibusdam deleniti labore aut dolore provident
                eaque harum vero cupiditate voluptate quas explicabo quam fuga.
                Ab veritatis culpa laudantium eligendi repellat iste commodi
                explicabo rem provident illo, neque nam molestias. Pariatur
                unde, est delectus nostrum quis atque odio eius tempore officiis
                reiciendis in, asperiores nisi, eligendi voluptate dolorem
                repellat nemo veniam cupiditate? Ipsum eveniet nesciunt
                corporis. Repudiandae modi ratione corrupti sit ipsa iure
                eligendi eum similique maiores est numquam consectetur tempore
                placeat consequuntur quas, vel voluptas nam maxime! Debitis
                nesciunt quaerat accusantium doloremque sunt veritatis alias
                explicabo illo dolor ipsa ex nulla rerum, ut culpa, nemo aut
                dolorem. Deserunt, perferendis ad rem quae nulla neque, ea
                facere vero, aliquam corrupti at culpa repellendus voluptatum
                dolor! Perspiciatis facere hic accusantium rem voluptatum
                provident. Facilis distinctio ut illum tenetur veritatis fuga
                similique. Rem modi nihil minima omnis nobis officia debitis id,
                mollitia alias maiores, facilis a? Amet, molestiae impedit
                maxime atque deserunt eius quis! Reiciendis tenetur recusandae
                eligendi eius, sed neque error inventore suscipit tempora eaque
                repudiandae facere esse, minima, omnis dolore iusto dolor. Non
                delectus enim voluptatem consequatur tempore illum autem quis
                eligendi consectetur doloribus obcaecati ut corporis iusto
                minima expedita similique sunt id voluptatibus, fuga laboriosam.
                Sequi modi voluptatum expedita, fuga eum inventore dicta quia ut
                numquam totam? Dolores explicabo consequatur nulla neque,
                debitis minima dignissimos non modi praesentium corporis ullam
                distinctio nam, iusto iste eos eius saepe recusandae velit
                porro! Et eum illo ducimus debitis doloremque, qui voluptate
                blanditiis! Voluptas quidem dolorum tempore id, et doloribus!
                Necessitatibus eius vero hic illo numquam perspiciatis!
                Voluptate corrupti amet reprehenderit placeat! Recusandae eum
                harum accusantium et aliquid quae aliquam nostrum officia
                excepturi, deserunt reprehenderit, inventore est saepe eaque
                animi quo sunt optio corporis blanditiis? Possimus ipsa maxime
                est, porro accusamus officiis fugiat temporibus ex expedita,
                saepe inventore assumenda sit veniam vitae voluptate doloribus
                nostrum? Officia quod nostrum aperiam voluptatibus corrupti,
                laudantium, facere minus vero inventore labore ipsa quisquam
                voluptas, tempore delectus id fugiat ratione natus praesentium.
                Ducimus sequi sapiente et, accusantium tempore aspernatur
                perferendis enim nisi impedit, quis, eveniet sit quidem porro
                vero assumenda. Consectetur similique quaerat voluptatibus
                minima iusto minus corporis veniam saepe, non quam ut dolore
                rerum ipsum nostrum nisi exercitationem. Possimus nobis cum,
                debitis pariatur quidem culpa excepturi beatae quas non nostrum
                odit libero repellendus ipsum mollitia nulla minus recusandae
                provident maxime corporis deleniti atque! Soluta aliquam ipsum
                ut maxime eligendi cum dolorum illum est modi nobis voluptates
                dignissimos voluptatum blanditiis obcaecati cumque sapiente, in
                exercitationem odio rem! Aperiam recusandae natus alias nisi
                architecto repellat. Ratione tempora quidem aut quos eveniet,
                rerum iste molestias explicabo labore repudiandae fugiat
                impedit, dignissimos vitae ducimus facilis accusantium at
                doloribus ut laboriosam. Facere omnis, sunt fugiat corrupti
                ipsum aliquam mollitia repellat voluptatum incidunt odit
                expedita laboriosam blanditiis modi veritatis explicabo iure
                illo, doloribus quia eaque. Consequuntur reiciendis minima
                ducimus quam unde eius tempora accusamus architecto qui dolor
                quaerat, cum facilis totam. Voluptates, culpa? Autem hic
                consequatur dolorem corporis officia voluptatum neque enim
                corrupti velit vel aliquam nemo id provident praesentium
                explicabo amet, exercitationem debitis omnis repellendus
                adipisci rerum dolore mollitia. Corrupti possimus voluptate id,
                nesciunt nisi perspiciatis eius pariatur ipsum cupiditate,
                commodi nobis qui accusantium quae vitae? Reprehenderit
                assumenda, molestiae itaque, laborum officia ipsam doloremque
                enim nobis consequatur fugit facere tempora iure ratione
                voluptate! Distinctio porro, maiores facere nobis voluptates,
                qui consequatur vel accusantium quibusdam eum fuga. Quis
                reiciendis non blanditiis in. Dignissimos repudiandae amet
                pariatur officia consequuntur sed ea quo, assumenda enim dolore
                repellat obcaecati delectus quasi excepturi voluptatem voluptas
                eum nesciunt. Ex eveniet magnam illo ullam et odio aut, quas
                quia quisquam quibusdam qui consectetur tempore repellat numquam
                nobis fugiat cupiditate sed neque veritatis explicabo veniam ad
                ea aliquam iure? Temporibus.
              </div>
            </ModalUrlProvider>
          </ModalProvider>
        </RestaurantStatusProvider>
      </body>
    </html>
  )
}
