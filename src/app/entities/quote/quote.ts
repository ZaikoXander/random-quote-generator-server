export interface QuoteProps {
  quote: string;
  media: string;
  character: string;
}

export class Quote {
  private _id: number;
  private props: QuoteProps;

  constructor(props: QuoteProps, id?: number) {
    this._id = id ?? undefined;
    this.props = props;
  }

  public get id(): number {
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
