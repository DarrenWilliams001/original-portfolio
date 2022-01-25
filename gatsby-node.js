const fetch = require(`node-fetch`)

exports.sourceNodes = async ({
  actions: { createNode },
  createContentDigest,
}) => {
  // get data from GitHub API at build time
  const result = await fetch(
    `http://api.weatherstack.com/current?access_key=bc09fbad52a3794a460accef89d6377b&query=Mooroolbark`
  )
  const resultData = await result.json()
  // create node for build time data example in the docs
  createNode({
    // nameWithOwner and url are arbitrary fields from the data
    nameWithOwner: resultData.full_name,
    url: resultData.html_url,
    // required fields
    id: `example-build-time-data`,
    location: [],
    current: [],
    internal: {
      type: `Example`,
      contentDigest: createContentDigest(resultData),
    },
  })
}

/*
{
  resolve: `gatsby-source-graphql`,
  options: {
    name: `weather`,
    url: `http://api.weatherstack.com/current?access_key=bc09fbad52a3794a460accef89d6377b&query=Mooroolbark`,
  },
},
*/
