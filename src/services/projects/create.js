import { projects } from '@/helpers/localStorage';



/**
 * Function used to create a new project
 * @returns {Promise<number>} project id
 */
export const create = async () => {
   const project = await projects.setLocalProject();

   return project.id;
}