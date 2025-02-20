export type MovieProps = {
    id: string;
    title: string;
    description: string;
    image_url: string;
    rating: string;
};

export type MovieResponseType =
    | string
    | {
          result: MovieProps[] | [];
          total: number;
      };

export type ErrorProps = {
    detail: {
        loc: [];
        msg: string;
        type: string;
    }[];
};
