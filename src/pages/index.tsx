import { Button } from '@nextui-org/react';

import { MainLayout } from '@/layouts';

export default function HomePage() {
  return (
    <MainLayout title="Home Page">
      <h1>Hello</h1>
      <Button color="gradient">Click</Button>
    </MainLayout>
  );
}
