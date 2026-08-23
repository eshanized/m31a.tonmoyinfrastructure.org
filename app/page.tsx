import { HomePage } from '@/components/site/home-page';
import { Navbar } from '@/components/site/navbar';
import { Footer } from '@/components/site/footer';
import { fetchRepoStats } from '@/lib/github';

export const revalidate = 3600;

export default async function Home() {
  const stats = await fetchRepoStats();

  return (
    <>
      <Navbar />
      <HomePage stats={stats} />
      <Footer />
    </>
  );
}
