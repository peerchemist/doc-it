import React from 'react';
import * as Docs from '../../docs';
import { MarkdownPage, DevResources } from '../../app/pages';

export type SimpleNavItem = {
    title: string;
    url?: string;
    icon?: JSX.Element;
    pages?: SimpleNavItem[];
    component?: JSX.Element;
    hidden?: boolean;
};

export type RedirectItem = {
    oldUrl: string;
    newUrl: string;
};

// Change scripts/crawl/sitemap.json after you make changes here.
export const pageDefinitions: SimpleNavItem[] = [
    {
        title: 'What is V Systems?',
        url: '/overview',
        component: <MarkdownPage title={'What is V Systems'} markdown={Docs.Overview} />,
    },
    {
        title: 'Get Started',
        url: '/get-started',
        pages: [
            {
                title: 'VSYS Stack',
                url: '/new-project',
                component: <MarkdownPage title={'VSYS Stack'} markdown={Docs.GetStarted.NewProject} />,
            },
            {
                title: 'Where to Begin?',
                url: '/new-project',
                component: <MarkdownPage title={'Where to Begin?'} markdown={Docs.GetStarted.NewProject} />,
            },
            {
                title: 'Quick Tutorials',
                url: '/web',
                component: <MarkdownPage title={'Quick Tutorials'} markdown={Docs.GetStarted.Web} />,
            },
            {
                title: 'Smart Contracts',
                url: '/smart-contracts',
                pages: [
                    {
                        title: 'Token Contract',
                        url: '/token-contract',
                        component: (
                            <MarkdownPage title={'Token Contract'} markdown={Docs.GetStarted.SmartContracts.TokenContract} />
                        ),
                    },
                    {
                        title: 'Lock Contract',
                        url: '/lock-contract',
                        component: (
                            <MarkdownPage title={'Lock Contract'} markdown={Docs.GetStarted.SmartContracts.LockContract} />
                        ),
                    },
                    {
                        title: 'NFT Contract',
                        url: '/nft-contract',
                        component: (
                            <MarkdownPage title={'Non-Fungible Token Contract'} markdown={Docs.GetStarted.SmartContracts.NftContract} />
                        ),
                    },
                    {
                        title: 'Payment Contract',
                        url: '/payment-contract',
                        component: (
                            <MarkdownPage title={'Payment Channel Contract'} markdown={Docs.GetStarted.SmartContracts.PaymentContract} />
                        ),
                    },
                    {
                        title: 'V Swap Contract',
                        url: '/v-swap',
                        component: (
                            <MarkdownPage title={'V Swap Contract'} markdown={Docs.GetStarted.SmartContracts.VswapContract} />
                        ),
                    },
                    {
                        title: 'V Atomic Swap Contract',
                        url: '/v-atomic-swap',
                        component: (
                            <MarkdownPage title={'V Atomic Swap'} markdown={Docs.GetStarted.SmartContracts.VatomicswapContract} />
                        ),
                    },
                    {
                        title: 'V Stable Swap Contract',
                        url: '/v-stable-swap',
                        component: (
                            <MarkdownPage title={'V Stable Swap'} markdown={Docs.GetStarted.SmartContracts.VstableswapContract} />
                        ),
                    },
                    {
                        title: 'V Option Contract',
                        url: '/v-option',
                        component: (
                            <MarkdownPage title={'V Option Contract'} markdown={Docs.GetStarted.SmartContracts.VoptionContract} />
                        ),
                    },
                    {
                        title: 'V Escrow Contract',
                        url: '/v-escrow',
                        component: (
                            <MarkdownPage title={'V Escrow Contract'} markdown={Docs.GetStarted.SmartContracts.VescrowContract} />
                        ),
                    },
                ],
            },
        ],
    },
    {
        title: 'API References',
        url: '/development',
        pages: [
            {
                title: 'Environment Setup',
                url: '/environment',
                component: (
                    <MarkdownPage title={'Environment Setup for Developers'} markdown={Docs.Development.Environment} />
                ),
            },
            {
                title: 'Brightlayer UI CLI',
                url: '/cli',
                component: <MarkdownPage title={'Brightlayer UI CLI'} markdown={Docs.Development.CLI} />,
            },
            {
                title: 'Web Frameworks',
                url: '/frameworks-web',
                pages: [
                    {
                        title: 'Introduction',
                        url: '/intro',
                        component: (
                            <MarkdownPage
                                title={'Web Framework Introduction'}
                                markdown={Docs.Development.WebFrameworks.Intro}
                            />
                        ),
                    },
                    {
                        title: 'Angular Guide',
                        url: '/angular',
                        component: (
                            <MarkdownPage title={'Angular Guide'} markdown={Docs.Development.WebFrameworks.Angular} />
                        ),
                    },
                    {
                        title: 'React Guide',
                        url: '/react',
                        component: (
                            <MarkdownPage title={'React Guide'} markdown={Docs.Development.WebFrameworks.React} />
                        ),
                    },
                ],
            },
            {
                title: 'Mobile Frameworks',
                url: '/frameworks-mobile',
                pages: [
                    {
                        title: 'Introduction',
                        url: '/intro',
                        component: (
                            <MarkdownPage
                                title={'Mobile Framework Introduction'}
                                markdown={Docs.Development.MobileFrameworks.Intro}
                            />
                        ),
                    },
                    {
                        hidden: true,
                        title: 'Apache Cordova Guide',
                        url: '/cordova',
                        component: (
                            <MarkdownPage
                                title={'Apache Cordova Guide'}
                                markdown={Docs.Development.MobileFrameworks.Cordova}
                            />
                        ),
                    },
                    {
                        title: 'Ionic Guide',
                        url: '/ionic',
                        component: (
                            <MarkdownPage title={'Ionic Guide'} markdown={Docs.Development.MobileFrameworks.Ionic} />
                        ),
                    },
                    {
                        title: 'React Native Guide',
                        url: '/react-native',
                        component: (
                            <MarkdownPage
                                title={'React Native Guide'}
                                markdown={Docs.Development.MobileFrameworks.ReactNative}
                            />
                        ),
                    },
                ],
            },
            {
                title: 'Testing',
                url: '/testing',
                component: <MarkdownPage title={'Testing'} markdown={Docs.Development.Testing} />,
            },
        ],
    },
    {
        title: 'Workflows',
        url: '/workflows',
        hidden: true,
        pages: [
            {
                title: 'Device Commissioning',
                url: '/device-commissioning',
                component: (
                    <MarkdownPage title={'Device Commissioning'} markdown={Docs.Workflows.DeviceCommissioning} />
                ),
            },
        ],
    },
    {
        title: 'Tools',
        url: '/resources',
        pages: [
            {
                title: 'Node Explorer',
                url: '/developer',
                component: <DevResources />,
            },
            {
                title: 'Testnet Explorer',
                url: '/designer',
                component: <MarkdownPage title={'Designer Resources'} markdown={Docs.Resources.DesignerResources} />,
            },
        ],
    },
];

export const pageRedirects: RedirectItem[] = [
    {
        oldUrl: '/patterns/login',
        newUrl: '/patterns/user-auth',
    },
    // Remove this when we have a landing page for all the resources
    {
        oldUrl: '/resources',
        newUrl: '/resources/developer',
    },
];
