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
                profile: 'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fce09554c-fc32-4d0a-88ed-8e7673cb8b39%2F4fb2f044-a145-463b-9bfb-25833d78e5a8%2Fimage.jpeg?id=8bc985d7-6ef0-4064-a150-c5ecda0ce30b&table=block&spaceId=ce09554c-fc32-4d0a-88ed-8e7673cb8b39&width=2000&userId=c89a0d2e-b46c-4133-800b-47494e5db7ea&cache=v2',
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
                profile: 'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fce09554c-fc32-4d0a-88ed-8e7673cb8b39%2Fdd9017f4-7c7f-43f9-8d74-a3318e5d76fa%2FIMG_1444.jpg?id=e718d4cf-26b8-49b3-b2f3-68f0469917e3&table=block&spaceId=ce09554c-fc32-4d0a-88ed-8e7673cb8b39&width=2000&userId=555786bd-2f68-4ca7-aaef-0f95362c1708&cache=v2',
            },
            {
                name: 'Shakib Ahmed',
                title: 'VP of Logistics & Operations',
                profile: 'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fce09554c-fc32-4d0a-88ed-8e7673cb8b39%2F64021f5c-a563-4b27-a945-38d8d2f38edc%2FIMG_2365.jpeg?id=423540a7-3657-45e2-b4e5-160bad047c43&table=block&spaceId=ce09554c-fc32-4d0a-88ed-8e7673cb8b39&width=1500&userId=555786bd-2f68-4ca7-aaef-0f95362c1708&cache=v2',
            },
            {
                name: 'Connor Lilbourne',
                title: 'Logistics Coordinator',
                profile: 'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fce09554c-fc32-4d0a-88ed-8e7673cb8b39%2Fa5ba74f2-bb53-4770-91e0-970a156aa51a%2Fme.jpg?id=2c3d03cb-bdfc-4074-876c-d23fa47ef361&table=block&spaceId=ce09554c-fc32-4d0a-88ed-8e7673cb8b39&width=2000&userId=c89a0d2e-b46c-4133-800b-47494e5db7ea&cache=v2',
            },
            {
                name: 'Itohan Odigie',
                title: 'Logistics Coordinator',
                profile: 'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fce09554c-fc32-4d0a-88ed-8e7673cb8b39%2Ff0ec3038-05a6-412b-86ea-5260e3fc3d21%2F2FF56F24-8453-43AA-840E-EBDD0ABFCFD5.jpeg?id=1ead9b52-507c-490e-be90-f517ba9a060b&table=block&spaceId=ce09554c-fc32-4d0a-88ed-8e7673cb8b39&width=1500&userId=555786bd-2f68-4ca7-aaef-0f95362c1708&cache=v2',
            },
            {
                name: 'Jonathan Pilarski',
                title: 'Logistics Coordinator',
                profile: 'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fce09554c-fc32-4d0a-88ed-8e7673cb8b39%2Fd4f568a5-afe0-4f71-ae0d-8cce74de8f0a%2Fjp.jpg?id=8e8cd933-8f25-4357-b881-430aa5c896de&table=block&spaceId=ce09554c-fc32-4d0a-88ed-8e7673cb8b39&width=2000&userId=c89a0d2e-b46c-4133-800b-47494e5db7ea&cache=v2',
            },
            {
                name: 'Maanay Shaikh',
                title: 'Logistics Coordinator',
                profile: 'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fce09554c-fc32-4d0a-88ed-8e7673cb8b39%2Fce2c8c06-20f0-4668-9e85-b30a8ba4cefc%2FLinkedIn_profile_pic.jpeg?id=13f72d38-6b98-4c60-911f-1f4fb0f9c0b9&table=block&spaceId=ce09554c-fc32-4d0a-88ed-8e7673cb8b39&width=1500&userId=555786bd-2f68-4ca7-aaef-0f95362c1708&cache=v2',
            },
            {
                name: 'Melissa Pinto',
                title: 'Logistics Coordinator',
                profile: 'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fce09554c-fc32-4d0a-88ed-8e7673cb8b39%2F815608c2-38be-416d-949e-6a559da087f3%2FD367DA45-98BF-40D3-992D-A9C1CEC8F91B.jpeg?id=2788eb96-f25e-42c2-b08d-12c6fd3bdfee&table=block&spaceId=ce09554c-fc32-4d0a-88ed-8e7673cb8b39&width=2000&userId=c89a0d2e-b46c-4133-800b-47494e5db7ea&cache=v2',
            },
            {
                name: 'Mila Cvetanovska',
                title: 'Logistics Coordinator',
                profile: 'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fce09554c-fc32-4d0a-88ed-8e7673cb8b39%2F3bea1de6-acea-4f15-ac76-54589e1a7250%2FMila.jpg?id=f75c7e0e-0902-4327-ab5c-decca6f7731e&table=block&spaceId=ce09554c-fc32-4d0a-88ed-8e7673cb8b39&width=2000&userId=c89a0d2e-b46c-4133-800b-47494e5db7ea&cache=v2',
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
                name: 'James Chun',
                title: 'Sponsorship Coordinator',
                profile: 'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fce09554c-fc32-4d0a-88ed-8e7673cb8b39%2Fb488a484-bad3-4abb-a37a-5a8766e66b82%2Fjames.jpg?id=b6487891-056c-4e3c-9b43-45ee5de60d36&table=block&spaceId=ce09554c-fc32-4d0a-88ed-8e7673cb8b39&width=2000&userId=c89a0d2e-b46c-4133-800b-47494e5db7ea&cache=v2',
            },
            {
                name: 'Sami Naqvi',
                title: 'Sponsorship Coordinator',
                profile: 'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fce09554c-fc32-4d0a-88ed-8e7673cb8b39%2Fc121e88f-bceb-4909-9299-694915b8248c%2FIMG_5954.jpg?id=2d450d62-a06c-41e5-94d5-3cc17342775d&table=block&spaceId=ce09554c-fc32-4d0a-88ed-8e7673cb8b39&width=2000&userId=c89a0d2e-b46c-4133-800b-47494e5db7ea&cache=v2',
            },
        ],
    },
    {
        title: 'marketing & media',
        members: [
            {
                name: 'Jenali Shenela',
                title: 'VP of Marketing & Media',
                profile: 'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fce09554c-fc32-4d0a-88ed-8e7673cb8b39%2Ffaca6770-be5f-472e-901c-956a69d2b892%2FPhoto_02-09-2023-23-18-30.heic?id=554e3b85-5893-4b2d-a410-cf205bdd2693&table=block&spaceId=ce09554c-fc32-4d0a-88ed-8e7673cb8b39&width=2000&userId=c89a0d2e-b46c-4133-800b-47494e5db7ea&cache=v2',
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
                profile: 'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fce09554c-fc32-4d0a-88ed-8e7673cb8b39%2F36549363-74d9-4dda-b347-321e651f630d%2FIMG_3828.jpg?id=f6dd2d89-e90f-4413-8eaf-016d4f9c1d7c&table=block&spaceId=ce09554c-fc32-4d0a-88ed-8e7673cb8b39&width=2000&userId=c89a0d2e-b46c-4133-800b-47494e5db7ea&cache=v2',
            },
            {
                name: 'Aren Melkon',
                title: 'Content Creator',
                profile: 'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fce09554c-fc32-4d0a-88ed-8e7673cb8b39%2F08c013b8-eea5-45a3-879e-fff477728187%2Fimage_2024-02-09_191242946.png?id=8680f36b-fbd4-488d-9d82-721e5f750499&table=block&spaceId=ce09554c-fc32-4d0a-88ed-8e7673cb8b39&width=1500&userId=555786bd-2f68-4ca7-aaef-0f95362c1708&cache=v2',
            },
        ],
    },
    {
        title: 'judges',
        members: [
            {
                name: 'Dhaval Shirvi',
                title: 'QA Specialist',
                company: 'SOTI',
                profile: 'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fce09554c-fc32-4d0a-88ed-8e7673cb8b39%2F006c5d6a-0712-4f63-bf19-05878a057a95%2FFullSizeRender.jpeg?id=c3bf2241-dabd-47e4-a3eb-d6d02e5c5496&table=block&spaceId=ce09554c-fc32-4d0a-88ed-8e7673cb8b39&width=2000&userId=555786bd-2f68-4ca7-aaef-0f95362c1708&cache=v2',
            },
            {
                name: 'Sarvesh Patil',
                title: 'Software Analyst',
                company: 'Enova Power Corp.',
                profile: 'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fce09554c-fc32-4d0a-88ed-8e7673cb8b39%2Fa0025872-ebb7-48fb-b9b9-e2bcc0701b64%2F1695256209554.jpeg?id=f2f7a11a-1fad-4ba5-a595-3bd0446ccf59&table=block&spaceId=ce09554c-fc32-4d0a-88ed-8e7673cb8b39&width=2000&userId=555786bd-2f68-4ca7-aaef-0f95362c1708&cache=v2',
            },
            {
                name: 'Javal Lotia',
                title: 'Software Analyst',
                company: 'Enova Power Corp.',
                profile: 'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fce09554c-fc32-4d0a-88ed-8e7673cb8b39%2F9a604a84-0431-4818-816a-81edbfa2d070%2FIMG_2295.jpeg?id=81587978-c860-459c-8242-ffcf219b57ee&table=block&spaceId=ce09554c-fc32-4d0a-88ed-8e7673cb8b39&width=2000&userId=555786bd-2f68-4ca7-aaef-0f95362c1708&cache=v2',
            },
            {
                name: 'Aman Garg',
                title: 'Software Developer',
                company: 'Nokia',
                profile: 'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fce09554c-fc32-4d0a-88ed-8e7673cb8b39%2Fd885bf81-40d4-4e5b-a7ca-14c85f441815%2F1551984474355.jpeg?id=5ed0e1f6-d3c6-4b6d-a6e3-b89c7d2f0c34&table=block&spaceId=ce09554c-fc32-4d0a-88ed-8e7673cb8b39&width=2000&userId=555786bd-2f68-4ca7-aaef-0f95362c1708&cache=v2',
            },
            {
                name: 'Harry Vijayaretnam',
                title: 'Software Developer',
                company: 'CoreLogic',
                profile: 'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fce09554c-fc32-4d0a-88ed-8e7673cb8b39%2Fb5b3689d-a6b7-4cb9-9ad3-387f4b6e0512%2FIMG_8944.jpeg?id=1227baa3-fc4f-4296-82d0-c67381e9b9bf&table=block&spaceId=ce09554c-fc32-4d0a-88ed-8e7673cb8b39&width=2000&userId=555786bd-2f68-4ca7-aaef-0f95362c1708&cache=v2',
            },
            {
                name: 'Faham Khan',
                title: 'Software Engineer II',
                company: 'Twitter / X',
                profile: 'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fce09554c-fc32-4d0a-88ed-8e7673cb8b39%2F22b0bf0d-3c81-485b-9fb5-671c364dd251%2F5674EA98-6B79-4612-B669-78AEF2CBE501.jpeg?id=b54bfde1-3ca3-459d-bce0-64f3499b462c&table=block&spaceId=ce09554c-fc32-4d0a-88ed-8e7673cb8b39&width=2000&userId=555786bd-2f68-4ca7-aaef-0f95362c1708&cache=v2',
            },
            {
                name: 'Ather Qureshi',
                title: 'Software Engineer',
                company: 'Carta',
                profile: 'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fce09554c-fc32-4d0a-88ed-8e7673cb8b39%2F835b5e03-62c8-43ca-9be8-7b9cc49d35d2%2Fimage.png?id=ec194f6d-dbb3-4e5e-af1e-36103a62588b&table=block&spaceId=ce09554c-fc32-4d0a-88ed-8e7673cb8b39&width=2000&userId=555786bd-2f68-4ca7-aaef-0f95362c1708&cache=v2',
            },
            {
                name: 'Stephanie Pitman',
                title: 'Software Developer',
                company: 'D2L',
                profile: 'https://media.licdn.com/dms/image/C4D03AQF0iN9moTqYlg/profile-displayphoto-shrink_400_400/0/1559067466047?e=1721260800&v=beta&t=nr7_ie--ojgSUDV6HPU_Unn96e9yJW0hTJpOdPdXfBI',
            },
            {
                name: 'Brandon Daliri',
                title: 'Developer',
                company: 'Artic Wolf',
                profile: 'https://media.licdn.com/dms/image/C4E03AQFUwfXSFr0ByQ/profile-displayphoto-shrink_800_800/0/1641073761152?e=1721260800&v=beta&t=oowqceF83exQl1EvKNJoE0TQv1RQ83PcwFyaGMEnnwc',
            },
            {
                name: 'Mark Ross',
                title: 'CEO',
                company: 'SEH Computer Systems Inc.',
                profile: 'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fce09554c-fc32-4d0a-88ed-8e7673cb8b39%2F7439a324-e4a8-498c-b314-35bc6f4a8948%2Fmark.jpeg?id=0abea828-1daa-47f7-9e89-5d2954609408&table=block&spaceId=ce09554c-fc32-4d0a-88ed-8e7673cb8b39&width=2000&userId=555786bd-2f68-4ca7-aaef-0f95362c1708&cache=v2',
            },
            {
                name: 'Rajat Malhotra',
                title: 'Software Engineer',
                company: 'Sun Life Financial',
                profile: 'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fce09554c-fc32-4d0a-88ed-8e7673cb8b39%2Fa5dfef82-27f6-49a3-8625-0bcbc5e8d11f%2F160837BA-5CB8-417D-A514-BE2628409909.jpg?id=d1ad2f36-3f3f-47e2-9a25-255d34c8ba43&table=block&spaceId=ce09554c-fc32-4d0a-88ed-8e7673cb8b39&width=2000&userId=555786bd-2f68-4ca7-aaef-0f95362c1708&cache=v2',
            },
            {
                name: 'Sooraj Modi',
                title: 'Software Engineer',
                company: 'Unity',
                profile: 'https://media.licdn.com/dms/image/C5603AQH7n11ZGSQ6Kw/profile-displayphoto-shrink_400_400/0/1516946375483?e=1721260800&v=beta&t=4poQF9pSUERjtKmRXD2Nfp06wwYCvRwOucmBP_gYVNA',
            },
            {
                name: 'Kirti Dhir',
                title: 'Data Scientist',
                company: 'Rakuten Kobo Inc.',
                profile: 'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fce09554c-fc32-4d0a-88ed-8e7673cb8b39%2Ffeef2667-eb1e-48ae-8e09-0f6d1dd7fbed%2Fkirti_photo.png?id=ccb57191-3118-4684-8dc3-46635327bf29&table=block&spaceId=ce09554c-fc32-4d0a-88ed-8e7673cb8b39&width=2000&userId=555786bd-2f68-4ca7-aaef-0f95362c1708&cache=v2',
            },
            {
                name: 'Wil McReynolds',
                title: 'CVO',
                company: 'KP9 Interactive',
                profile: 'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fce09554c-fc32-4d0a-88ed-8e7673cb8b39%2Fee667d8b-4cff-408a-a004-5921b2ea9109%2FUntitled.png?id=e4161eb4-da01-4435-9622-788d22926c38&table=block&spaceId=ce09554c-fc32-4d0a-88ed-8e7673cb8b39&width=2000&userId=555786bd-2f68-4ca7-aaef-0f95362c1708&cache=v2',
            },
        ]
    }
];

export { departments };