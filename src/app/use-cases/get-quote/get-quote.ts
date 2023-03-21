import { Injectable } from '@nestjs/common';
import { Quote } from '@app/entities/quote/quote';
import { QuotesRepository } from '@app/repositories/quotes-repository';

interface GetQuoteResponse {
  quote: Quote;
}

@Injectable()
export class GetQuote {
  constructor(private quotesRepository: QuotesRepository) {}

  async execute(): Promise<GetQuoteResponse> {
    const count = await this.quotesRepository.countMany();

    const randomQuoteId = Math.floor(Math.random() * count + 1);
    const quote = await this.quotesRepository.findById(randomQuoteId);

    if (!quote) {
      throw new Error('Quote not found.');
    }

    return {
      quote,
    };
  }
}
