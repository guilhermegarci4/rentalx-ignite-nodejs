import { container } from "tsyringe";
import { IDateProvider } from "./IDateProvider";
import { DayjsDateProvider } from "./implementations/DayjsDateprovider";

container.registerSingleton<IDateProvider> (
    "DateProvider",
    DayjsDateProvider
);