export interface LocationData {
  city: string;
  state: string;
  slug: string;
}

export const TARGET_LOCATIONS: LocationData[] = [
  // Original US Tier 2
  { city: "Columbus", state: "OH", slug: "columbus-oh" },
  { city: "Raleigh", state: "NC", slug: "raleigh-nc" },
  { city: "Charlotte", state: "NC", slug: "charlotte-nc" },
  { city: "Nashville", state: "TN", slug: "nashville-tn" },
  { city: "Indianapolis", state: "IN", slug: "indianapolis-in" },
  { city: "Salt Lake City", state: "UT", slug: "salt-lake-city-ut" },
  { city: "Madison", state: "WI", slug: "madison-wi" },
  { city: "Omaha", state: "NE", slug: "omaha-ne" },
  { city: "Boise", state: "ID", slug: "boise-id" },
  { city: "Huntsville", state: "AL", slug: "huntsville-al" },
  { city: "Tampa", state: "FL", slug: "tampa-fl" },
  { city: "Orlando", state: "FL", slug: "orlando-fl" },
  { city: "Cincinnati", state: "OH", slug: "cincinnati-oh" },
  { city: "Kansas City", state: "MO", slug: "kansas-city-mo" },
  { city: "Pittsburgh", state: "PA", slug: "pittsburgh-pa" },
  { city: "Grand Rapids", state: "MI", slug: "grand-rapids-mi" },
  { city: "Glenview", state: "IL", slug: "glenview-il" },
  { city: "Ashburn", state: "VA", slug: "ashburn-va" },
  { city: "Chattanooga", state: "TN", slug: "chattanooga-tn" },
  { city: "Greenville", state: "SC", slug: "greenville-sc" },
  { city: "Des Moines", state: "IA", slug: "des-moines-ia" },
  { city: "Richmond", state: "VA", slug: "richmond-va" },
  
  // Major US Cities (NA)
  { city: "New York", state: "NY", slug: "new-york-ny" },
  { city: "Los Angeles", state: "CA", slug: "los-angeles-ca" },
  { city: "Chicago", state: "IL", slug: "chicago-il" },
  { city: "Houston", state: "TX", slug: "houston-tx" },
  { city: "Phoenix", state: "AZ", slug: "phoenix-az" },
  { city: "Philadelphia", state: "PA", slug: "philadelphia-pa" },
  { city: "San Antonio", state: "TX", slug: "san-antonio-tx" },
  { city: "San Diego", state: "CA", slug: "san-diego-ca" },
  { city: "Dallas", state: "TX", slug: "dallas-tx" },
  { city: "Austin", state: "TX", slug: "austin-tx" },
  { city: "San Jose", state: "CA", slug: "san-jose-ca" },
  { city: "Santa Clara", state: "CA", slug: "santa-clara-ca" },
  { city: "San Francisco", state: "CA", slug: "san-francisco-ca" },
  { city: "Seattle", state: "WA", slug: "seattle-wa" },
  { city: "Denver", state: "CO", slug: "denver-co" },
  { city: "Washington", state: "DC", slug: "washington-dc" },
  { city: "Boston", state: "MA", slug: "boston-ma" },
  { city: "Atlanta", state: "GA", slug: "atlanta-ga" },
  { city: "Miami", state: "FL", slug: "miami-fl" },
  { city: "Portland", state: "OR", slug: "portland-or" },
  { city: "Las Vegas", state: "NV", slug: "las-vegas-nv" },

  // Canada (NA)
  { city: "Toronto", state: "ON", slug: "toronto-on" },
  { city: "Vancouver", state: "BC", slug: "vancouver-bc" },
  { city: "Montreal", state: "QC", slug: "montreal-qc" },
  { city: "Calgary", state: "AB", slug: "calgary-ab" },
  { city: "Ottawa", state: "ON", slug: "ottawa-on" },
  { city: "Edmonton", state: "AB", slug: "edmonton-ab" },
  { city: "Halifax", state: "NS", slug: "halifax-ns" },
  { city: "Victoria", state: "BC", slug: "victoria-bc" },

  // European Union & UK
  { city: "Warsaw", state: "PL", slug: "warsaw-poland" },
  { city: "London", state: "UK", slug: "london-uk" },
  { city: "Berlin", state: "DE", slug: "berlin-de" },
  { city: "Paris", state: "FR", slug: "paris-fr" },
  { city: "Amsterdam", state: "NL", slug: "amsterdam-nl" },
  { city: "Dublin", state: "IE", slug: "dublin-ie" },
  { city: "Stockholm", state: "SE", slug: "stockholm-se" },
  { city: "Copenhagen", state: "DK", slug: "copenhagen-dk" },
  { city: "Munich", state: "DE", slug: "munich-de" },
  { city: "Madrid", state: "ES", slug: "madrid-es" },
  { city: "Barcelona", state: "ES", slug: "barcelona-es" },
  { city: "Vienna", state: "AT", slug: "vienna-at" },
  { city: "Zurich", state: "CH", slug: "zurich-ch" },
  { city: "Frankfurt", state: "DE", slug: "frankfurt-de" },
  { city: "Helsinki", state: "FI", slug: "helsinki-fi" }
];

export function getLocationBySlug(slug: string): LocationData | undefined {
  return TARGET_LOCATIONS.find((loc) => loc.slug === slug);
}
