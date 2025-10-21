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