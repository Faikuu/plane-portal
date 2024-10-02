
export async function POST(req: Request): Promise<Response> {
	const { title, description }: { title: string, description: string } = await req.json();
  
	const issueData = {
	  name: title,
	  description_html: description,
	};
  
	try {
	  const response = await fetch(`${process.env.PLANE_URL}/api/v1/workspaces/${process.env.PLANE_WORKSPACE_SLUG}/projects/${process.env.PLANE_PROJECT_ID}/issues/`, {
		method: 'POST',
		headers: {
		  'Content-Type': 'application/json',
		  'X-API-Key': `${process.env.PLANE_API_TOKEN}`,
		},
		body: JSON.stringify(issueData),
	  });
  
	  if (!response.ok) {
		return new Response(JSON.stringify({ error: 'Failed to create issue' }), {
		  status: response.status,
		});
	  }
  
	  const data = await response.json();
	  return new Response(JSON.stringify(data), {
		status: 200,
	  });
	} catch (error) {
	  return new Response(
		JSON.stringify({ error: error instanceof Error ? error.message : 'Unknown error' }),
		{ status: 500 },
	  );
	}
  }
  
  