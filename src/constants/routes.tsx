import CommunityPagePresentation from "../Pages/Community/CommunityPagePresentation"
import ErrorPage from "../Pages/ErrorPage"
import FeedbackPagePresentation from "../Pages/Feedback/FeedbackPagePresentation"
import HomePagePresentation from "../Pages/Home/HomePagePresentation"
import Layout from "../Pages/Layout"
import ShopPagePresentation from "../Pages/Shop/ShopPagePresentation"
import StoriesPagePresentation from "../Pages/Stories/StoriesPagePresentation"

interface IRouteComponents {
    path: string;
    element: JSX.Element;
    errorElement?: JSX.Element;
    children?: any;
  }

const routePaths = Object.freeze({
    home: "/home",
    community: 'community',
    stories: 'stories',
    shop: 'shop',
    feedback: 'feedback',
})

export const AllRoutes:Array<IRouteComponents> = [
    {
        path: '/',
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                path: routePaths.home,
                element: <HomePagePresentation />,
                // errorElement: <ErrorPage />,
            },
            {
                path: routePaths.community,
                element: <CommunityPagePresentation />
            },
            {
                path: routePaths.stories,
                element: <StoriesPagePresentation />
            },
            {
                path: routePaths.shop,
                element: <ShopPagePresentation />
            },
            {
                path: routePaths.feedback,
                element: <FeedbackPagePresentation />
            },
        ]
    }
]