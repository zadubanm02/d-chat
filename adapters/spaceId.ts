import axios from "axios";

export type SpaceIDResponse = {
  code: number;
  name: string;
};

export const getSpaceIdENS = async (
  chain: string,
  address: string
): Promise<SpaceIDResponse> => {
  try {
    if (chain === "bsc") {
      const result = await axios.get<SpaceIDResponse>(
        `https://api.prd.space.id/v1/getName?tld=bnb&address=${address}`,
        {
          headers: {
            "Access-Control-Allow-Origin": "http://localhost:3000",
          },
        }
      );
      return result.data;
    }
    const result = await axios.get<SpaceIDResponse>(
      `https://api.prd.space.id/v1/getName?tld=arb1&address=${address}`,
      {
        headers: {
          "Access-Control-Allow-Origin": "http://localhost:3000",
        },
      }
    );
    return result.data;
  } catch (error) {
    throw error;
  }
};
