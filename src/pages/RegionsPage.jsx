import { regions } from "../data/regions";
import RegionCard from "../components/shared/RegionCard";

const RegionsPage = () => (
  <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16">
    <div className="mb-8">
      <h1 className="text-3xl font-semibold text-foreground sm:text-4xl">
        Regions
      </h1>
      <p className="mt-2 text-muted-foreground">
        Browse properties by city across Indonesia.
      </p>
    </div>

    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {regions.map((region) => (
        <RegionCard key={region.id} region={region} />
      ))}
    </div>
  </main>
);

export default RegionsPage;
