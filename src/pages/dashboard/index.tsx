import Head from 'next/head';
import Paginate from '@components/Paginate';
import ProductsList from '@components/ProductsList';
import { PaginateProvider } from '@hooks/usePaginate';
import Statistics from '@components/Statistics';

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>YardStore - Dashboard</title>
      </Head>
      <PaginateProvider>
        <Statistics />
        <Paginate />
        <ProductsList />
        <Paginate />
      </PaginateProvider>
    </>
  );
}
