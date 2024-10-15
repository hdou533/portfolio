

# Erros Encountered

1. Secret not loading correctly
    ```
    Unhandled Runtime Error
    TypeError: Failed to construct 'URL': Invalid URL

    Source
    utils\fetchProjects.ts (32:28) @ request

    30 | ;
    31 | 
    > 32 | const data = await client.request(query);
        |                          ^
    33 | return data?.projectCollection?.items;
    34 | };
    35 | 
    Call Stack
    if I enter the URL and token directly it works, but I use process.env it is not working. and it can console log the URL and token
    ```

    Solution: Add the prefix NEXT_PUBLIC_ to all of your environment variables.
