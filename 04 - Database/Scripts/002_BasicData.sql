--- tblChannel_Type
INSERT INTO [dbo].[tblChannel_Type] ([ds_type]) VALUES ('Email');
INSERT INTO [dbo].[tblChannel_Type] ([ds_type]) VALUES ('WhatsApp');
INSERT INTO [dbo].[tblChannel_Type] ([ds_type]) VALUES ('SMS');
INSERT INTO [dbo].[tblChannel_Type] ([ds_type]) VALUES ('Signal');
INSERT INTO [dbo].[tblChannel_Type] ([ds_type]) VALUES ('Telegram');
INSERT INTO [dbo].[tblChannel_Type] ([ds_type]) VALUES ('Microsft Teams');
INSERT INTO [dbo].[tblChannel_Type] ([ds_type]) VALUES ('Slack');

--- tblCampaign_Status
INSERT INTO [dbo].[tblCampaign_Status] ([ds_name]) VALUES ('Draft');
INSERT INTO [dbo].[tblCampaign_Status] ([ds_name]) VALUES ('Scheduled');
INSERT INTO [dbo].[tblCampaign_Status] ([ds_name]) VALUES ('Running');
INSERT INTO [dbo].[tblCampaign_Status] ([ds_name]) VALUES ('Completed');
INSERT INTO [dbo].[tblCampaign_Status] ([ds_name]) VALUES ('Canceled');