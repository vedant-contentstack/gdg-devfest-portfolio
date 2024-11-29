import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Personalize from '@contentstack/personalize-edge-sdk'

const Projects = ({ stack }) => {
  const [projects, setProjects] = useState([])

  // useEffect(() => {
  //   (async () => {
  //     const projectUid = '6749fba32f955ae937fb8d34'
  //     Personalize.setEdgeApiUrl('https://eu-personalize-edge.contentstack.com')
  //     await Personalize.init(projectUid)
  //     const activeVariant = Personalize.getVariantAliases()
  //     console.log(activeVariant)
  //   })()
  // }, [])

  useEffect(() => {
    (() => {
      stack
        .ContentType('project')
        .Query()
        .only(['title', 'image', 'description', 'device', 'technologies'])
        .toJSON()
        .find()
        .then((result) => {
          // const entries = result[0]
          // console.log
          // entries.forEach((entry) => {
          //   stack
          //     .ContentType('project')
          //     .Entry(entry.uid)
          //     .variants('6749fc12bc3d6fbd345856b8/0')
          //     .toJSON()
          //     .fetch().then((res)=>{
          //       console.log("var", res)
          //     })
          // })
          setProjects(result[0])
        })
    })()
  }, [])

  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>
      <div>
        {projects.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <img
                src={project?.image?.url}
                width={150}
                height={150}
                alt={project?.title}
                className="mb-6 rounded"
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">{project?.title}</h6>
              <p className="mb-4 text-neutral-400">{project?.description}</p>
              {project?.technologies.split(',').map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
