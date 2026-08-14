"use client";

import {
  Database,
  File,
  Folder,
  Save,
  Settings,
} from "lucide-react";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarProvider,
  MenubarSeparator,
  MenubarTrigger,
} from ".";

export default function MenubarExamples() {
  return (
    <MenubarProvider>
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger value="file">
            File
          </MenubarTrigger>

          <MenubarContent value="file">
            <MenubarItem>
              <Folder className="mr-2 h-4 w-4" />
              New Folder
            </MenubarItem>

            <MenubarItem>
              <File className="mr-2 h-4 w-4" />
              New File
            </MenubarItem>

            <MenubarSeparator />

            <MenubarItem>
              <Save className="mr-2 h-4 w-4" />
              Save
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>

        <MenubarMenu>
          <MenubarTrigger value="database">
            Database
          </MenubarTrigger>

          <MenubarContent value="database">
            <MenubarItem>
              <Database className="mr-2 h-4 w-4" />
              PostgreSQL
            </MenubarItem>

            <MenubarItem>
              Redis
            </MenubarItem>

            <MenubarItem>
              MongoDB
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>

        <MenubarMenu>
          <MenubarTrigger value="settings">
            Settings
          </MenubarTrigger>

          <MenubarContent value="settings">
            <MenubarItem>
              <Settings className="mr-2 h-4 w-4" />
              Preferences
            </MenubarItem>

            <MenubarSeparator />

            <MenubarItem>
              About
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </MenubarProvider>
  );
}