import { MainViewModel } from "./main-view-model"

export function pageLoaded(args) {
    const page = args.object;
    page.bindingContext = new MainViewModel(page, "main-page2")
}
