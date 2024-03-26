const departments = [
    {
        title: 'admin',
        members: [
            {
                name: 'Nausher Rao',
                title: 'President',
                profile: 'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fce09554c-fc32-4d0a-88ed-8e7673cb8b39%2Faa7d00a9-24cb-401e-a47a-d9cad2c6a057%2FNaush.jpg?id=3ebb5bab-3444-4327-b720-96894165c708&table=block&spaceId=ce09554c-fc32-4d0a-88ed-8e7673cb8b39&width=2000&userId=555786bd-2f68-4ca7-aaef-0f95362c1708&cache=v2',
            },
            {
                name: 'Maximus Ghosh',
                title: 'VP of Admin & Finance',
                profile: 'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fce09554c-fc32-4d0a-88ed-8e7673cb8b39%2Fac9a2c1b-c5d7-4afc-9684-8190553f5140%2FIMG_3510.jpg?id=8bc985d7-6ef0-4064-a150-c5ecda0ce30b&table=block&spaceId=ce09554c-fc32-4d0a-88ed-8e7673cb8b39&width=2000&userId=555786bd-2f68-4ca7-aaef-0f95362c1708&cache=v2',
            },
            {
                name: 'Torin Borton-McCallum',
                title: 'VP of Hackathon Strategy & Logistics Coordinator',
                profile: 'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fce09554c-fc32-4d0a-88ed-8e7673cb8b39%2Fcf7b129a-b0b9-40a8-8c15-2ce28d0e41e9%2FIMG_5194.jpeg?id=f987aedf-83f3-4447-8aba-66615116cb6b&table=block&spaceId=ce09554c-fc32-4d0a-88ed-8e7673cb8b39&width=2000&userId=555786bd-2f68-4ca7-aaef-0f95362c1708&cache=v2',
            },
            {
                name: 'Nishant Tewari',
                title: 'VP of Internal Affairs',
                profile: 'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fce09554c-fc32-4d0a-88ed-8e7673cb8b39%2Fc2a8d135-dcdd-40a7-89d8-7cf356e17643%2FNish.jpg?id=2dd5a7ee-7596-4a0b-937e-b5a8c53fbfd3&table=block&spaceId=ce09554c-fc32-4d0a-88ed-8e7673cb8b39&width=2000&userId=555786bd-2f68-4ca7-aaef-0f95362c1708&cache=v2',
            },
        ],
    },
    {
        title: 'design operations',
        members: [
            {
                name: 'Jacqueline Truong',
                title: 'VP of Design Operations',
                profile: 'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fce09554c-fc32-4d0a-88ed-8e7673cb8b39%2F75093fd5-2bba-4fe6-a777-c6ad625ffb4c%2Fjackie.jpg?id=605f4800-8474-425e-9760-173e7deb2a3f&table=block&spaceId=ce09554c-fc32-4d0a-88ed-8e7673cb8b39&width=2000&userId=555786bd-2f68-4ca7-aaef-0f95362c1708&cache=v2',
            },
            {
                name: 'Tracy Ou',
                title: 'VP of Design Operations',
                profile: 'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fce09554c-fc32-4d0a-88ed-8e7673cb8b39%2F96960e69-3591-4277-a6f3-e04d60e8099b%2FIMG_7208.jpeg?id=a91a4bbd-eed9-419a-84ed-17f8669526d4&table=block&spaceId=ce09554c-fc32-4d0a-88ed-8e7673cb8b39&width=2000&userId=555786bd-2f68-4ca7-aaef-0f95362c1708&cache=v2',
            },
            {
                name: 'Vandan Thacker',
                title: 'UI Designer',
                profile: 'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fce09554c-fc32-4d0a-88ed-8e7673cb8b39%2F7e4717ab-53a4-4ec5-9670-f5cf804536c1%2Fvandan.jpg?id=2f5b703c-0862-4182-bb61-489edcb7de61&table=block&spaceId=ce09554c-fc32-4d0a-88ed-8e7673cb8b39&width=2000&userId=555786bd-2f68-4ca7-aaef-0f95362c1708&cache=v2',
            },
            {
                name: 'Naomi Aiyevbekpeny',
                title: 'Graphic Designer',
                profile: 'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fce09554c-fc32-4d0a-88ed-8e7673cb8b39%2F912d36f9-ccaf-4eca-9285-48b8e2e7dd58%2FIMG_20240209_182942_772.jpg?id=c29a5329-639f-40a8-8502-57c175fc4bb4&table=block&spaceId=ce09554c-fc32-4d0a-88ed-8e7673cb8b39&width=2000&userId=555786bd-2f68-4ca7-aaef-0f95362c1708&cache=v2',
            },
        ],
    },
    {
        title: 'engineering',
        members: [
            {
                name: 'Aidan Traboulay',
                title: 'VP of Engineering',
                profile: 'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fce09554c-fc32-4d0a-88ed-8e7673cb8b39%2Ffb87abdd-94df-4186-b732-f8900f75e0f3%2FAidan.png?id=802076ae-51cc-449f-89af-001e8e483cc2&table=block&spaceId=ce09554c-fc32-4d0a-88ed-8e7673cb8b39&width=2000&userId=555786bd-2f68-4ca7-aaef-0f95362c1708&cache=v2',
            },
            {
                name: 'Juan Wu',
                title: 'VP of Engineering',
                profile: 'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fce09554c-fc32-4d0a-88ed-8e7673cb8b39%2F718ca44f-2211-491b-9048-dd6a5de7de87%2Fmmexport1668302474533__01(1).jpg?id=50642fa9-97b1-4d62-a7f8-e944eb4e739d&table=block&spaceId=ce09554c-fc32-4d0a-88ed-8e7673cb8b39&width=2000&userId=555786bd-2f68-4ca7-aaef-0f95362c1708&cache=v2',
            },
            {
                name: 'Abdul Basit',
                title: 'Software Engineer',
                profile: 'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fce09554c-fc32-4d0a-88ed-8e7673cb8b39%2F4dcee704-4744-4e0d-81a0-7caaba08dcbb%2FIMG_6814.jpeg?id=ee061ed2-9cf6-497f-8431-8fa204b0b4f3&table=block&spaceId=ce09554c-fc32-4d0a-88ed-8e7673cb8b39&width=1490&userId=555786bd-2f68-4ca7-aaef-0f95362c1708&cache=v2',
            },
            {
                name: 'Amir Agassi',
                title: 'Software Engineer',
                profile: 'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fce09554c-fc32-4d0a-88ed-8e7673cb8b39%2F733bfeb9-abe4-43b6-9c93-0982b25ee454%2F04e2760ba3b0d56cf5b4abab1633de3d-transformed.png?id=3539efcd-e7b0-492b-b2eb-92545422a8e3&table=block&spaceId=ce09554c-fc32-4d0a-88ed-8e7673cb8b39&width=1490&userId=555786bd-2f68-4ca7-aaef-0f95362c1708&cache=v2',
            },
            {
                name: 'Chee Kian Teoh',
                title: 'Software Engineer',
                profile: 'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fce09554c-fc32-4d0a-88ed-8e7673cb8b39%2F95ed3d8b-369f-4510-8339-268615e32b0f%2Fjustasgood.jpg?id=e1dd249c-3431-456f-849d-d69754692e0a&table=block&spaceId=ce09554c-fc32-4d0a-88ed-8e7673cb8b39&width=1490&userId=555786bd-2f68-4ca7-aaef-0f95362c1708&cache=v2',
            },
            {
                name: 'Gabriel Diniz',
                title: 'Software Engineer',
                profile: 'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fce09554c-fc32-4d0a-88ed-8e7673cb8b39%2Fff48a9a6-c8da-4297-9a14-3d5c27f322a4%2FHeadshot2.jpg?id=2fd57386-7539-473c-a950-9e056f626df0&table=block&spaceId=ce09554c-fc32-4d0a-88ed-8e7673cb8b39&width=1490&userId=555786bd-2f68-4ca7-aaef-0f95362c1708&cache=v2',
            },
            {
                name: 'Kevin Vu',
                title: 'Software Engineer',
                profile: 'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fce09554c-fc32-4d0a-88ed-8e7673cb8b39%2Fa094cee9-1730-4d2b-82ef-4a8d2025901b%2FIMG_3517.jpeg?id=0f4481f2-8981-4f7f-9969-c0e5c15e60db&table=block&spaceId=ce09554c-fc32-4d0a-88ed-8e7673cb8b39&width=1500&userId=555786bd-2f68-4ca7-aaef-0f95362c1708&cache=v2',
            },
            {
                name: 'Nora Chamseddin',
                title: 'Software Engineer',
                profile: 'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fce09554c-fc32-4d0a-88ed-8e7673cb8b39%2F7873d337-ca4f-4863-8a75-4f9dc208b531%2Fnora.jpeg?id=b187e163-3c7c-4c94-b81e-3500197efa43&table=block&spaceId=ce09554c-fc32-4d0a-88ed-8e7673cb8b39&width=1500&userId=555786bd-2f68-4ca7-aaef-0f95362c1708&cache=v2',
            },
        ],
    },
    {
        title: 'logistics & operations',
        members: [
            {
                name: 'Dhar Patel',
                title: 'VP of Logistics & Operations',
                profile: 'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fce09554c-fc32-4d0a-88ed-8e7673cb8b39%2F228e884b-359e-42f7-aa4c-2a1bc3c49176%2F31abbf50-87c5-40d1-9850-d039e94fa7b2.jpeg?id=e718d4cf-26b8-49b3-b2f3-68f0469917e3&table=block&spaceId=ce09554c-fc32-4d0a-88ed-8e7673cb8b39&width=1500&userId=555786bd-2f68-4ca7-aaef-0f95362c1708&cache=v2',
            },
            {
                name: 'Shakib Ahmed',
                title: 'VP of Logistics & Operations',
                profile: 'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fce09554c-fc32-4d0a-88ed-8e7673cb8b39%2F64021f5c-a563-4b27-a945-38d8d2f38edc%2FIMG_2365.jpeg?id=423540a7-3657-45e2-b4e5-160bad047c43&table=block&spaceId=ce09554c-fc32-4d0a-88ed-8e7673cb8b39&width=1500&userId=555786bd-2f68-4ca7-aaef-0f95362c1708&cache=v2',
            },
            {
                name: 'Connor Lilbourne',
                title: 'Logistics Coordinator',
                profile: 'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fce09554c-fc32-4d0a-88ed-8e7673cb8b39%2F4a564aa7-fd27-48f0-b60c-edd5d758fae2%2Fme.jpg?id=2c3d03cb-bdfc-4074-876c-d23fa47ef361&table=block&spaceId=ce09554c-fc32-4d0a-88ed-8e7673cb8b39&width=1500&userId=555786bd-2f68-4ca7-aaef-0f95362c1708&cache=v2',
            },
            {
                name: 'Itohan Odigie',
                title: 'Logistics Coordinator',
                profile: 'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fce09554c-fc32-4d0a-88ed-8e7673cb8b39%2Ff0ec3038-05a6-412b-86ea-5260e3fc3d21%2F2FF56F24-8453-43AA-840E-EBDD0ABFCFD5.jpeg?id=1ead9b52-507c-490e-be90-f517ba9a060b&table=block&spaceId=ce09554c-fc32-4d0a-88ed-8e7673cb8b39&width=1500&userId=555786bd-2f68-4ca7-aaef-0f95362c1708&cache=v2',
            },
            {
                name: 'Jonathan Pilarski',
                title: 'Logistics Coordinator',
                profile: 'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fce09554c-fc32-4d0a-88ed-8e7673cb8b39%2F50bb5fd7-d3ed-46c7-b8e7-648330ac34b9%2Fjp.jpg?id=8e8cd933-8f25-4357-b881-430aa5c896de&table=block&spaceId=ce09554c-fc32-4d0a-88ed-8e7673cb8b39&width=1500&userId=555786bd-2f68-4ca7-aaef-0f95362c1708&cache=v2',
            },
            {
                name: 'Maanay Shaikh',
                title: 'Logistics Coordinator',
                profile: 'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fce09554c-fc32-4d0a-88ed-8e7673cb8b39%2Fce2c8c06-20f0-4668-9e85-b30a8ba4cefc%2FLinkedIn_profile_pic.jpeg?id=13f72d38-6b98-4c60-911f-1f4fb0f9c0b9&table=block&spaceId=ce09554c-fc32-4d0a-88ed-8e7673cb8b39&width=1500&userId=555786bd-2f68-4ca7-aaef-0f95362c1708&cache=v2',
            },
            {
                name: 'Melissa Pinto',
                title: 'Logistics Coordinator',
                profile: 'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fce09554c-fc32-4d0a-88ed-8e7673cb8b39%2F64e92ca5-ae23-46e8-ba7b-9e921a220a9a%2FD367DA45-98BF-40D3-992D-A9C1CEC8F91B.jpeg?id=2788eb96-f25e-42c2-b08d-12c6fd3bdfee&table=block&spaceId=ce09554c-fc32-4d0a-88ed-8e7673cb8b39&width=1500&userId=555786bd-2f68-4ca7-aaef-0f95362c1708&cache=v2',
            },
            {
                name: 'Mila Cvetanovska',
                title: 'Logistics Coordinator',
                profile: 'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fce09554c-fc32-4d0a-88ed-8e7673cb8b39%2F3cf20a7f-9765-42e9-b1e2-02f23e1574b5%2FMila.jpg?id=f75c7e0e-0902-4327-ab5c-decca6f7731e&table=block&spaceId=ce09554c-fc32-4d0a-88ed-8e7673cb8b39&width=1500&userId=555786bd-2f68-4ca7-aaef-0f95362c1708&cache=v2',
            },
            {
                name: 'Vincenzo Milano',
                title: 'Logistics Coordinator',
                profile: 'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fce09554c-fc32-4d0a-88ed-8e7673cb8b39%2F6af6cb5f-5133-4b80-b5e4-d897ab19f30d%2F1664742292350.jpg?id=4a2e0f68-68e3-43d1-b768-28d8e4a717b7&table=block&spaceId=ce09554c-fc32-4d0a-88ed-8e7673cb8b39&width=1500&userId=555786bd-2f68-4ca7-aaef-0f95362c1708&cache=v2',
            },
            {
                name: 'Syed Rafae Hashmi',
                title: 'Logistics Coordinator',
                profile: 'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fce09554c-fc32-4d0a-88ed-8e7673cb8b39%2F15edd4d1-4544-4b8f-a621-ac1273eaf3a4%2FIMG_3363.jpg?id=a3d4458e-339d-40a3-b261-b2a5da48b50a&table=block&spaceId=ce09554c-fc32-4d0a-88ed-8e7673cb8b39&width=1500&userId=555786bd-2f68-4ca7-aaef-0f95362c1708&cache=v2',
            },
            {
                name: 'Sohan Hossain',
                title: 'Logistics Coordinator',
                profile: 'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fce09554c-fc32-4d0a-88ed-8e7673cb8b39%2F2156895a-028d-49f4-954b-47172776259d%2F1699036441551.png?id=4df9663c-934c-410f-804a-e3c8dc9bdcfe&table=block&spaceId=ce09554c-fc32-4d0a-88ed-8e7673cb8b39&width=1500&userId=555786bd-2f68-4ca7-aaef-0f95362c1708&cache=v2',
            },
            {
                name: 'Roshni Mahindru',
                title: 'Logistics Coordinator',
                profile: 'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fce09554c-fc32-4d0a-88ed-8e7673cb8b39%2Fb4c98b04-86fd-4172-830a-bef4baa27d7f%2FIMG_4087.jpeg?id=59baad57-839d-4317-9682-bce5a68d2b3d&table=block&spaceId=ce09554c-fc32-4d0a-88ed-8e7673cb8b39&width=1500&userId=555786bd-2f68-4ca7-aaef-0f95362c1708&cache=v2',
            },
        ],
    },
    {
        title: 'corporate relations & sponsorships',
        members: [
            {
                name: 'Arnav Chauhan',
                title: 'VP of Corporate Relations & Sponsorships',
                profile: 'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fce09554c-fc32-4d0a-88ed-8e7673cb8b39%2F9e3abad2-8542-4fc0-8951-efb3fa416840%2FHeadshot_Arnav.jpg?id=4b5b6cc4-b9b9-45c5-85c9-d17267d0d534&table=block&spaceId=ce09554c-fc32-4d0a-88ed-8e7673cb8b39&width=1500&userId=555786bd-2f68-4ca7-aaef-0f95362c1708&cache=v2',
            },
            {
                name: 'Rafid Karim',
                title: 'Sponsorship Coordinator',
                profile: 'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fce09554c-fc32-4d0a-88ed-8e7673cb8b39%2Fdd201399-0a8c-4ba7-9956-abde9f19a653%2F3K5A1776_(1).jpg?id=9b497b37-ac6c-42c9-ba98-5376851cfef9&table=block&spaceId=ce09554c-fc32-4d0a-88ed-8e7673cb8b39&width=1500&userId=555786bd-2f68-4ca7-aaef-0f95362c1708&cache=v2',
            },
            {
                name: 'Kiyomi Cheng',
                title: 'Sponsorship Coordinator',
                profile: 'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fce09554c-fc32-4d0a-88ed-8e7673cb8b39%2Fa292ffc8-c8a7-41c1-a525-dd564d5d05bd%2FIMG_2881.jpg?id=7a8e52f7-a7ef-478f-9a9d-f5ac74701d73&table=block&spaceId=ce09554c-fc32-4d0a-88ed-8e7673cb8b39&width=1500&userId=555786bd-2f68-4ca7-aaef-0f95362c1708&cache=v2',
            },
            {
                name: 'James Chun',
                title: 'Sponsorship Coordinator',
                profile: 'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fce09554c-fc32-4d0a-88ed-8e7673cb8b39%2F89d607e9-6fe1-4537-876f-22f040346f4e%2Fjames.jpg?id=b6487891-056c-4e3c-9b43-45ee5de60d36&table=block&spaceId=ce09554c-fc32-4d0a-88ed-8e7673cb8b39&width=1500&userId=555786bd-2f68-4ca7-aaef-0f95362c1708&cache=v2',
            },
            {
                name: 'Sami Naqvi',
                title: 'Sponsorship Coordinator',
                profile: 'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fce09554c-fc32-4d0a-88ed-8e7673cb8b39%2Fa0a56a9e-e112-418d-b72b-2ee597ecaa6b%2FIMG_5954.jpg?id=2d450d62-a06c-41e5-94d5-3cc17342775d&table=block&spaceId=ce09554c-fc32-4d0a-88ed-8e7673cb8b39&width=1500&userId=555786bd-2f68-4ca7-aaef-0f95362c1708&cache=v2',
            },
        ],
    },
    {
        title: 'marketing & media',
        members: [
            {
                name: 'Jenali Shenela',
                title: 'VP of Marketing & Media',
                profile: 'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fce09554c-fc32-4d0a-88ed-8e7673cb8b39%2F06cf21b9-1f07-4fa7-9f7c-758bda5ecb90%2FPhoto_02-09-2023-23-18-30.heic?id=554e3b85-5893-4b2d-a410-cf205bdd2693&table=block&spaceId=ce09554c-fc32-4d0a-88ed-8e7673cb8b39&width=1500&userId=555786bd-2f68-4ca7-aaef-0f95362c1708&cache=v2',
            },
            {
                name: 'Geeran Balaranjan',
                title: 'Social Media Coordinator',
                profile: 'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fce09554c-fc32-4d0a-88ed-8e7673cb8b39%2F04095774-1664-4d13-8d98-c4caa346753a%2FIMG_6261.jpeg?id=4ab20fe0-e0d1-42b5-b48b-37476be66bdf&table=block&spaceId=ce09554c-fc32-4d0a-88ed-8e7673cb8b39&width=1500&userId=555786bd-2f68-4ca7-aaef-0f95362c1708&cache=v2',
            },
            {
                name: 'Mina Mansour',
                title: 'Social Media Coordinator',
                profile: 'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fce09554c-fc32-4d0a-88ed-8e7673cb8b39%2F45914669-fc69-41bf-ad87-f789ae5f98a1%2FIMG_3140.png?id=47371a2c-47f8-4ca1-87e8-468228a924b3&table=block&spaceId=ce09554c-fc32-4d0a-88ed-8e7673cb8b39&width=1500&userId=555786bd-2f68-4ca7-aaef-0f95362c1708&cache=v2',
            },
            {
                name: 'Samriddhi Makasare',
                title: 'Social Media Coordinator',
                profile: 'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fce09554c-fc32-4d0a-88ed-8e7673cb8b39%2F20098672-86ce-4d57-9e18-20d071ea5f39%2F1692723102118.jpeg?id=4583acab-3115-4489-a902-f6283107a250&table=block&spaceId=ce09554c-fc32-4d0a-88ed-8e7673cb8b39&width=1500&userId=555786bd-2f68-4ca7-aaef-0f95362c1708&cache=v2',
            },
            {
                name: 'Yousef Hozayen',
                title: 'Content Creator',
                profile: 'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fce09554c-fc32-4d0a-88ed-8e7673cb8b39%2Fa92ac67e-0fd6-4526-a72e-ee88917ed0fd%2FIMG_3828.jpg?id=f6dd2d89-e90f-4413-8eaf-016d4f9c1d7c&table=block&spaceId=ce09554c-fc32-4d0a-88ed-8e7673cb8b39&width=1500&userId=555786bd-2f68-4ca7-aaef-0f95362c1708&cache=v2',
            },
            {
                name: 'Aren Melkon',
                title: 'Content Creator',
                profile: 'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fce09554c-fc32-4d0a-88ed-8e7673cb8b39%2F08c013b8-eea5-45a3-879e-fff477728187%2Fimage_2024-02-09_191242946.png?id=8680f36b-fbd4-488d-9d82-721e5f750499&table=block&spaceId=ce09554c-fc32-4d0a-88ed-8e7673cb8b39&width=1500&userId=555786bd-2f68-4ca7-aaef-0f95362c1708&cache=v2',
            },
        ],
    },
];

export { departments };
