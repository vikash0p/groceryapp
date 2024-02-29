
import { Middlebar, MobileNavbar, Navbar, Topbar,GoToTop } from '@/components'
import './globals.css'
import { Quicksand } from 'next/font/google'
import ReduxProvider from '@/redux-toolkit/ReduxProvider'


const quicksand = Quicksand({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'Grocery',
  description: 'FreshCart is more than just a grocery app; it \'s your dependable partner in creating a seamless shopping experience.Whether you\'re a busy professional, a parent on the go, or simply looking for a smarter way to shop, FreshCart is here to make your grocery journey enjoyable and hassle-free.',
  keyword: ["Fresh  ",
    "Vegetables",
    "Dairy Products",
    "Baked Goods",
    "Canned Foods",
    "Snack Items",
    "Meat and Poultry",
    "Seafood",
    "Frozen Foods",
    "Beverages",
    "Condiments",
    "Cereals",
    "Pasta and Grains",
    "Spices",
    "Health and Wellness",
    "Cleaning Supplies",
    "Bakery Delights",
    "Deli Meats and Cheeses",
    "Household Essentials",
    "Pet Supplies "],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body className={`${quicksand.className} scroll-smooth transition ease-linear duration-500 `} >
        <ReduxProvider>
          <Topbar />
          <Middlebar />
          <Navbar />
          <MobileNavbar />
          <main>{children}</main>
          <GoToTop />
        </ReduxProvider>

      </body>
    </html>
  )
}
