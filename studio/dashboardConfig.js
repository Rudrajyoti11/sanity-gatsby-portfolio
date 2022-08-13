export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '62f75b456b267d76ab98d14f',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-ctzis3q6',
                  apiId: 'd35f1703-aa3a-4704-b373-439e80e66938'
                },
                {
                  buildHookId: '62f75b470d269974c2423114',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-gfd4orhy',
                  apiId: 'b4c4ed32-f5ac-4133-8fa6-ab9c9cc8d0c3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Rudrajyoti11/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-gfd4orhy.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
