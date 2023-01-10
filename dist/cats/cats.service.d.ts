import { Model } from 'mongoose';
import { Cat } from './interfaces/cat.interface';
import { CatInput } from './inputs/cat.input';
export declare class CatsService {
    private readonly catModel;
    constructor(catModel: Model<Cat>);
    create(createCatDto: CatInput): Promise<Cat>;
    findAll(): Promise<Cat[]>;
}
