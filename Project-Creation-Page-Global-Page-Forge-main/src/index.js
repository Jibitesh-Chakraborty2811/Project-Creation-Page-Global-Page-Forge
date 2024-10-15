import Resolver from '@forge/resolver';
import api, { route} from '@forge/api';

const resolver = new Resolver();

resolver.define('getText', (req) => {
    console.log(req);

    return 'Hello world!';
});

resolver.define('createProject',async ({payload}) =>{
    console.log(payload.name)

    var name = payload.name
    var key = payload.name.toUpperCase().substring(0,10)

    var bodyData = {
      "assigneeType": "PROJECT_LEAD",
      "avatarId": 10200,
      "description": "Cloud migration initiative",
      "key": key,  // Use the key directly
      "leadAccountId": "712020:430b909b-d795-4f4f-9838-9f38ce09a70b",
      "name": name,  // Use the name directly
      "projectTemplateKey": "com.atlassian.jira-core-project-templates:jira-core-simplified-process-control",
      "projectTypeKey": "business",
      "url": "http://atlassian.com"
  };

    var bodyDataString = JSON.stringify(bodyData)
  
      const response = await api.asUser().requestJira(route`/rest/api/3/project`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: bodyDataString
      });
      
      console.log(`Response: ${response.status} ${response.statusText}`);
      console.log(await response.json());

      return response
})

export const handler = resolver.getDefinitions();

