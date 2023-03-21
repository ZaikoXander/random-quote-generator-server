import { randomUUID } from 'crypto';

export interface QuoteProps {
  quote: string;
  media: string;
  character: string;
}

export class Quote {
  private _id: string;
  private props: QuoteProps;

  constructor(props: QuoteProps, id?: string) {
    this._id = id ?? randomUUID();
    this.props = props;
  }

  public get id(): string {
    return this._id;
  }

  public get quote(): string {
    return this.props.quote;
  }

  public get media(): string {
    return this.props.media;
  }

  public get character(): string {
    return this.props.character;
  }
}
