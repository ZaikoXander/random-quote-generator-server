import { Quote } from '@app/entities/quote/quote';
import { QuotesRepository } from '@app/repositories/quotes-repository';

export class InMemoryQuotesRepository implements QuotesRepository {
  public quotes: Quote[] = [];

  async create(quote: Quote): Promise<void> {
    this.quotes.push(quote);
  }

  async findById(quoteId: number): Promise<Quote | null> {
    const quote = this.quotes.find((item) => item.id === quoteId);

    if (!quote) {
      return null;
    }

    return quote;
  }

  async countMany(): Promise<number> {
    return this.quotes.length;
  }
}
