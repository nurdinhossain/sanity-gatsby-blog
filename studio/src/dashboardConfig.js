export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5eace9016d3a2dcd70e1200e',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-ur54ifco',
                  apiId: '4946ec93-f4ff-40ff-b751-b71e958cdd40'
                },
                {
                  buildHookId: '5eace9018aa2b73f5291f928',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-d6kf3vkj',
                  apiId: '6d301772-5b1e-49ea-86e7-b74403c3375f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nurdinhossain/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-d6kf3vkj.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
