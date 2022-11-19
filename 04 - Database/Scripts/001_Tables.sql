-- ************************************** [dbo].[tblUser]
CREATE TABLE [dbo].[tblUser]
(
 [id_user]     [int] IDENTITY(1,1) NOT NULL,
 [ds_login]    nvarchar(max) NOT NULL ,
 [ds_name]     nvarchar(250) NOT NULL ,
 [ds_email]    nvarchar(max) NOT NULL ,
 [hs_password] varbinary(8000) NOT NULL ,
 [dt_created]  datetime NOT NULL ,
 [dt_deleted]  datetime NULL ,
 
 CONSTRAINT [PK_USER_ID] PRIMARY KEY CLUSTERED ([id_user] ASC)
);
GO

-- ************************************** [dbo].[tblUser_Log]
CREATE TABLE [dbo].[tblUser_Log]
(
 [id_user_log] [int] IDENTITY(1,1) NOT NULL,
 [id_user]     int NOT NULL ,
 [ds_message]  nvarchar(max) NULL ,
 [dt_log]      datetime NOT NULL ,

 CONSTRAINT [PK_USER_LOG_ID] PRIMARY KEY CLUSTERED ([id_user_log] ASC),
 CONSTRAINT [FK_USER_ID] FOREIGN KEY ([id_user])  REFERENCES [dbo].[tblUser]([id_user])
);
GO

CREATE NONCLUSTERED INDEX [INDEX_USER_LOG_ID] ON [dbo].[tblUser_Log] 
 (
  [id_user] ASC
 )

GO

-- ************************************** [dbo].[tblChannel_Type]
CREATE TABLE [dbo].[tblChannel_Type]
(
 [id_channel_type] [int] IDENTITY(1,1) NOT NULL,
 [ds_type]         nvarchar(50) NOT NULL ,

 CONSTRAINT [PK_CHANNEL_TYPE_ID] PRIMARY KEY CLUSTERED ([id_channel_type] ASC)
);
GO


-- ************************************** [dbo].[tblContact]
CREATE TABLE [dbo].[tblContact]
(
 [id_contact]                 [int] IDENTITY(1,1) NOT NULL,
 [ds_first_name]              nvarchar(250) NULL ,
 [ds_middle_name]             nvarchar(150) NOT NULL ,
 [ds_surname]                 nvarchar(200) NULL ,
 [ds_internal_identification] nvarchar(200) NULL ,
 [dt_created]                 datetime NOT NULL ,
 [dt_deleted]                 datetime NULL ,
 [id_user_created]            int NOT NULL ,
 [id_user_deleted]            int NULL ,

 CONSTRAINT [PK_CONTACT__ID] PRIMARY KEY CLUSTERED ([id_contact] ASC),
 CONSTRAINT [FK_CONTACT_USER_DELETED_ID] FOREIGN KEY ([id_user_deleted])  REFERENCES [dbo].[tblUser]([id_user]),
 CONSTRAINT [FK_CONTACT_USER_CREATED_ID] FOREIGN KEY ([id_user_created])  REFERENCES [dbo].[tblUser]([id_user])
);
GO


CREATE NONCLUSTERED INDEX [INDEX_CONTACT_USER_DELETED_ID] ON [dbo].[tblContact] 
 (
  [id_user_deleted] ASC
 )

GO

CREATE NONCLUSTERED INDEX [INDEX_CONTACT_USER_CREATED_ID] ON [dbo].[tblContact] 
 (
  [id_user_created] ASC
 )

GO

-- ************************************** [dbo].[tblContact_Information]
CREATE TABLE [dbo].[tblContact_Information]
(
 [id_contact_information] [int] IDENTITY(1,1) NOT NULL,
 [id_contact]             int NOT NULL ,
 [id_channel_type]        int NOT NULL ,
 [ds_contact_information] nvarchar(500) NOT NULL ,
 [dt_created]             datetime NOT NULL ,
 [dt_deleted]             datetime NULL ,
 [id_user_created]        int NOT NULL ,
 [id_user_deleted]        int NULL ,


 CONSTRAINT [PK_CONTACT_INFORMATION_ID] PRIMARY KEY CLUSTERED ([id_contact_information] ASC),
 CONSTRAINT [FK_CONTACT_INFORMATION_CONTACT_ID] FOREIGN KEY ([id_contact])  REFERENCES [dbo].[tblContact]([id_contact]),
 CONSTRAINT [FK_CONTACT_INFORMATION_CHANNEL_ID] FOREIGN KEY ([id_channel_type])  REFERENCES [dbo].[tblChannel_Type]([id_channel_type]),
 CONSTRAINT [FK_CONTACT_INFORMATION_DELETED_ID] FOREIGN KEY ([id_user_deleted])  REFERENCES [dbo].[tblUser]([id_user]),
 CONSTRAINT [FK_CONTACT_INFORMATION_CREATED_ID] FOREIGN KEY ([id_user_created])  REFERENCES [dbo].[tblUser]([id_user])
);
GO


CREATE NONCLUSTERED INDEX [INDEX_CONTACT_INFORMATION_CONTACT_ID] ON [dbo].[tblContact_Information] 
 (
  [id_contact] ASC
 )

GO

CREATE NONCLUSTERED INDEX [INDEX_CONTACT_INFORMATION_CHANNEL_ID] ON [dbo].[tblContact_Information] 
 (
  [id_channel_type] ASC
 )

GO

CREATE NONCLUSTERED INDEX [INDEX_CONTACT_INFORMATION_DELETED_ID] ON [dbo].[tblContact_Information] 
 (
  [id_user_deleted] ASC
 )

GO

CREATE NONCLUSTERED INDEX [INDEX_CONTACT_INFORMATION_CREATED_ID] ON [dbo].[tblContact_Information] 
 (
  [id_user_created] ASC
 )

GO


-- ************************************** [dbo].[tblChannel_Setting]
CREATE TABLE [dbo].[tblChannel_Setting]
(
 [id_channel_setting] [int] IDENTITY(1,1) NOT NULL,
 [ds_hostname]        nvarchar(max) NOT NULL ,
 [id_channel_type]    int NOT NULL ,
 [ds_key]             nvarchar(max) NULL ,
 [ds_secret]          nvarchar(max) NULL ,
 [dt_created]         datetime NOT NULL ,
 [dt_deleted]         datetime NULL ,
 [id_user_created]    int NOT NULL ,
 [id_user_deleted]    int NULL ,


 CONSTRAINT [PK_CHANNEL_SETTING_ID] PRIMARY KEY CLUSTERED ([id_channel_setting] ASC),
 CONSTRAINT [FK_CHANNEL_SETTING_CHANNEL_TYPE_ID] FOREIGN KEY ([id_channel_type])  REFERENCES [dbo].[tblChannel_Type]([id_channel_type]),
 CONSTRAINT [FK_CHANNEL_SETTING_DELETED_ID] FOREIGN KEY ([id_user_deleted])  REFERENCES [dbo].[tblUser]([id_user]),
 CONSTRAINT [FK_CHANNEL_SETTING_CREATED_ID] FOREIGN KEY ([id_user_created])  REFERENCES [dbo].[tblUser]([id_user])
);
GO


CREATE NONCLUSTERED INDEX [INDEX_CHANNEL_TYPE_ID] ON [dbo].[tblChannel_Setting] 
 (
  [id_channel_type] ASC
 )

GO


-- ************************************** [dbo].[tblCampaign_Status]
CREATE TABLE [dbo].[tblCampaign_Status]
(
 [id_campaign_status] [int] IDENTITY(1,1) NOT NULL,
 [ds_name]            nvarchar(50) NOT NULL ,


 CONSTRAINT [PK_CAMPAIGN_STATUS_ID] PRIMARY KEY CLUSTERED ([id_campaign_status] ASC)
);
GO


-- ************************************** [dbo].[tblCampaign]
CREATE TABLE [dbo].[tblCampaign]
(
 [id_campaign]        [int] IDENTITY(1,1) NOT NULL,
 [ds_name]            nvarchar(150) NOT NULL ,
 [id_campaign_status] int NOT NULL ,
 [ds_title]           nvarchar(250) NULL ,
 [ds_description]     nvarchar(max) NOT NULL ,
 [dt_scheduled_begin] datetime NOT NULL ,
 [dt_scheduled_end]   datetime NULL ,
 [dt_created]         datetime NOT NULL ,
 [dt_deleted]         datetime NULL ,
 [id_user_created]    int NOT NULL ,
 [id_user_deleted]    int NULL ,
 


 CONSTRAINT [PK_CAMPAIGN_ID] PRIMARY KEY CLUSTERED ([id_campaign] ASC),
 CONSTRAINT [FK_CAMPAIGN_STATUS_ID] FOREIGN KEY ([id_campaign_status])  REFERENCES [dbo].[tblCampaign_Status]([id_campaign_status]),
 CONSTRAINT [FK_CAMPAIGN_DELETED_ID] FOREIGN KEY ([id_user_deleted])  REFERENCES [dbo].[tblUser]([id_user]),
 CONSTRAINT [FK_CAMPAIGN_CREATED_ID] FOREIGN KEY ([id_user_created])  REFERENCES [dbo].[tblUser]([id_user])
);
GO


CREATE NONCLUSTERED INDEX [INDEX_CAMPAIGN_DELETED_ID] ON [dbo].[tblCampaign] 
 (
  [id_user_deleted] ASC
 )

GO

CREATE NONCLUSTERED INDEX [INDEX_CAMPAIGN_CREATED_ID] ON [dbo].[tblCampaign] 
 (
  [id_user_created] ASC
 )

GO

CREATE NONCLUSTERED INDEX [INDEX_CAMPAIGN_STATUS_ID] ON [dbo].[tblCampaign] 
 (
  [id_campaign_status] ASC
 )

GO


-- ************************************** [dbo].[tblCampaign_Contact]
CREATE TABLE [dbo].[tblCampaign_Contact]
(
 [id_campaign_contact] [int] IDENTITY(1,1) NOT NULL,
 [id_campaign]         int NOT NULL ,
 [id_channel_type]     int NOT NULL ,
 [id_contact]          int NOT NULL ,
 [dt_created]          datetime NOT NULL ,
 [id_user_created]    int NOT NULL ,
 [id_user_deleted]    int NULL ,


 CONSTRAINT [PK_CAMPAIGN_CONTACT_ID] PRIMARY KEY CLUSTERED ([id_campaign_contact] ASC),
 CONSTRAINT [FK_CAMPAIGN_CONTACT_CAMPAIGN_ID] FOREIGN KEY ([id_campaign])  REFERENCES [dbo].[tblCampaign]([id_campaign]),
 CONSTRAINT [FK_CAMPAIGN_CONTACT_CONTACT_ID] FOREIGN KEY ([id_contact])  REFERENCES [dbo].[tblContact]([id_contact]),
 CONSTRAINT [FK_CAMPAIGN_CONTACT_CHANNEL_TYPE_ID] FOREIGN KEY ([id_channel_type])  REFERENCES [dbo].[tblChannel_Type]([id_channel_type]),
 CONSTRAINT [FK_CAMPAIGN_CONTACT_DELETED_ID] FOREIGN KEY ([id_user_deleted])  REFERENCES [dbo].[tblUser]([id_user]),
 CONSTRAINT [FK_CAMPAIGN_CONTACT_CREATED_ID] FOREIGN KEY ([id_user_created])  REFERENCES [dbo].[tblUser]([id_user])
);
GO


CREATE NONCLUSTERED INDEX [INDEX_CAMPAIGN_CONTACT_CAMPAIGN_ID] ON [dbo].[tblCampaign_Contact] 
 (
  [id_campaign] ASC
 )

GO

CREATE NONCLUSTERED INDEX [INDEX_CAMPAIGN_CONTACT_CONTACT_ID] ON [dbo].[tblCampaign_Contact] 
 (
  [id_contact] ASC
 )

GO

CREATE NONCLUSTERED INDEX [INDEX_CAMPAIGN_CONTACT_CHANNEL_TYPE_ID] ON [dbo].[tblCampaign_Contact] 
 (
  [id_channel_type] ASC
 )

GO

CREATE NONCLUSTERED INDEX [INDEX_CAMPAIGN_CONTACT_DELETED_ID] ON [dbo].[tblCampaign] 
 (
  [id_user_deleted] ASC
 )

GO

CREATE NONCLUSTERED INDEX [INDEX_CAMPAIGN_CONTACT_CREATED_ID] ON [dbo].[tblCampaign] 
 (
  [id_user_created] ASC
 )

GO


-- ************************************** [dbo].[tblCampaign_Contact_Log]
CREATE TABLE [dbo].[tblCampaign_Contact_Log]
(
 [id_campaign_contact_log] [int] IDENTITY(1,1) NOT NULL,
 [id_campaign_contact]     int NOT NULL ,
 [dt_log]                  datetime NOT NULL ,
 [ds_message]              nvarchar(max) NOT NULL ,
 [ds_code_message]         nvarchar(50) NOT NULL ,


 CONSTRAINT [PK_CAMPAIGN_CONTACT_LOG_ID] PRIMARY KEY CLUSTERED ([id_campaign_contact_log] ASC),
 CONSTRAINT [FK_CAMPAIGN_CONTACT_LOG_CONTACT_ID] FOREIGN KEY ([id_campaign_contact])  REFERENCES [dbo].[tblCampaign_Contact]([id_campaign_contact])
);
GO


CREATE NONCLUSTERED INDEX [INDEX_CAMPAIGN_CONTACT_LOG_CONTACT_ID] ON [dbo].[tblCampaign_Contact_Log] 
 (
  [id_campaign_contact] ASC
 )

GO
