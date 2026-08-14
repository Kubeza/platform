"use client";

import {
  BookOpen,
  Cloud,
  Database,
  Server,
} from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuProvider,
  NavigationMenuTrigger,
} from ".";

export default function NavigationMenuExamples() {
  return (
    <NavigationMenuProvider>
      <div className="space-y-8">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger value="learn">
                Learn
              </NavigationMenuTrigger>

              <NavigationMenuContent value="learn">
                <div className="grid gap-2">
                  <NavigationMenuLink href="/linux">
                    <span className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4" />
                      Linux
                    </span>
                  </NavigationMenuLink>

                  <NavigationMenuLink href="/docker">
                    <span className="flex items-center gap-2">
                      <Server className="h-4 w-4" />
                      Docker
                    </span>
                  </NavigationMenuLink>

                  <NavigationMenuLink href="/kubernetes">
                    <span className="flex items-center gap-2">
                      <Cloud className="h-4 w-4" />
                      Kubernetes
                    </span>
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger value="platform">
                Platform
              </NavigationMenuTrigger>

              <NavigationMenuContent value="platform">
                <div className="grid gap-2">
                  <NavigationMenuLink href="/postgres">
                    PostgreSQL
                  </NavigationMenuLink>

                  <NavigationMenuLink href="/redis">
                    Redis
                  </NavigationMenuLink>

                  <NavigationMenuLink href="/mongodb">
                    MongoDB
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger value="services">
                Services
              </NavigationMenuTrigger>

              <NavigationMenuContent value="services">
                <div className="grid gap-2">
                  <NavigationMenuLink href="/api">
                    API Gateway
                  </NavigationMenuLink>

                  <NavigationMenuLink href="/database">
                    <span className="flex items-center gap-2">
                      <Database className="h-4 w-4" />
                      Database
                    </span>
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </NavigationMenuProvider>
  );
}