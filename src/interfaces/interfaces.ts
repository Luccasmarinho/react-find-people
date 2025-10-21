import type { ReactNode } from "react";

export interface DataPeople {
    id: {
      value: string;
    };
    name: {
      title: string;
      first: string;
      last: string;
    };
    registered: {
      age: number;
      date: string;
    };
    picture: {
      large: string;
    }
    login: {
      username: string;
    }
    location: {
      city: string;
      country: string;
      state: string;
      street: {
        name: string;
        number: number;
      }
    }
  }

  export interface DataPeopleResults {
    results: DataPeople[];
  }

  export interface ContextTypes {
    valueInputName: string;
    setValueInputName: React.Dispatch<React.SetStateAction<string>>
  }

export interface PropsChildren {
    children: ReactNode;
}

export interface IPagination {
    totalPages: number;
    page: number;
    onChange: (event: React.ChangeEvent<unknown>, newPage: number) => void;
  }

  export interface ButtonProps {
    $nameBtn?: string;
  }

  export type InfoTypes = DataPeople["name"] & DataPeople["registered"];
  export type LoginTypes = DataPeople["login"];
  export type LocationTypes = Omit<DataPeople["location"], "street"> & DataPeople["location"]["street"];