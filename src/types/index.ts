

export interface formData{
_id:string;
amount:number;
description:string;
date:Date,
category:string
}

export interface inputProps{
  placeholder?: string;
  value?: string;
  name: string;
  type?: string;
  className?: string;
  // onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange?: any
}