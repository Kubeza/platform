import type {
  TerminalEngine,
  TerminalExecutionResult,
} from "../../labs/engine/terminal-engine.types";

const HOST = "kubeza-k8s";

export class KubernetesPracticeEngine
  implements TerminalEngine
{
  execute(
    rawCommand: string,
  ): TerminalExecutionResult {
    const command = rawCommand.trim();
    const normalized =
      command.toLowerCase();

    if (!normalized) {
      return {
        command,
        output: undefined,
        exitCode: 0,
      };
    }

    if (normalized === "clear") {
      return {
        command,
        output: undefined,
        exitCode: 0,
      };
    }

    if (
      normalized ===
      "kubectl version --client"
    ) {
      return {
        command,
        output: [
          "Client Version: v1.34.1",
          "Kustomize Version: v5.7.1",
        ].join("\n"),
        exitCode: 0,
      };
    }

    if (
      normalized ===
      "kubectl cluster-info"
    ) {
      return {
        command,
        output: [
          "Kubernetes control plane is running at https://kubeza-k8s:6443",
          "CoreDNS is running at https://kubeza-k8s:6443/api/v1/namespaces/kube-system/services/kube-dns:dns/proxy",
        ].join("\n"),
        exitCode: 0,
      };
    }

    if (
      normalized ===
      "kubectl get nodes"
    ) {
      return {
        command,
        output: [
          "NAME           STATUS   ROLES           AGE   VERSION",
          "kubeza-k8s     Ready    control-plane   12d   v1.34.1",
        ].join("\n"),
        exitCode: 0,
      };
    }

    if (
      normalized ===
      "kubectl get nodes -o wide"
    ) {
      return {
        command,
        output: [
          "NAME         STATUS   ROLES           INTERNAL-IP   EXTERNAL-IP   OS-IMAGE       KERNEL-VERSION",
          "kubeza-k8s   Ready    control-plane   10.0.0.20      <none>        Ubuntu 24.04   6.8.0",
        ].join("\n"),
        exitCode: 0,
      };
    }

    if (
      normalized ===
      "kubectl get pods"
    ) {
      return {
        command,
        output: [
          "NAME                            READY   STATUS    RESTARTS   AGE",
          "web-7d8c9f6b4d-x2k7m            1/1     Running   0          18m",
          "api-5c7d8b9f76-q4p2n            1/1     Running   0          18m",
          "redis-0                         1/1     Running   0          18m",
        ].join("\n"),
        exitCode: 0,
      };
    }

    if (
      normalized ===
      "kubectl get pods -a"
    ) {
      return {
        command,
        output: [
          "NAME                            READY   STATUS    RESTARTS   AGE",
          "web-7d8c9f6b4d-x2k7m            1/1     Running   0          18m",
          "api-5c7d8b9f76-q4p2n            1/1     Running   0          18m",
          "redis-0                         1/1     Running   0          18m",
        ].join("\n"),
        exitCode: 0,
      };
    }

    if (
      normalized ===
      "kubectl get pods -a"
    ) {
      return {
        command,
        output: [
          "NAME                            READY   STATUS    RESTARTS   AGE",
          "web-7d8c9f6b4d-x2k7m            1/1     Running   0          18m",
          "api-5c7d8b9f76-q4p2n            1/1     Running   0          18m",
          "redis-0                         1/1     Running   0          18m",
        ].join("\n"),
        exitCode: 0,
      };
    }

    if (
      normalized ===
      "kubectl get pods -a"
    ) {
      return {
        command,
        output: [
          "NAME                            READY   STATUS    RESTARTS   AGE",
          "web-7d8c9f6b4d-x2k7m            1/1     Running   0          18m",
          "api-5c7d8b9f76-q4p2n            1/1     Running   0          18m",
          "redis-0                         1/1     Running   0          18m",
        ].join("\n"),
        exitCode: 0,
      };
    }

    if (
      normalized ===
      "kubectl get deployments"
    ) {
      return {
        command,
        output: [
          "NAME   READY   UP-TO-DATE   AVAILABLE   AGE",
          "web    2/2     2            2           18m",
          "api    2/2     2            2           18m",
        ].join("\n"),
        exitCode: 0,
      };
    }

    if (
      normalized ===
      "kubectl get svc"
    ) {
      return {
        command,
        output: [
          "NAME         TYPE        CLUSTER-IP     EXTERNAL-IP   PORT(S)        AGE",
          "kubernetes   ClusterIP   10.96.0.1      <none>        443/TCP        12d",
          "web          NodePort    10.96.24.18    <none>        80:30080/TCP   18m",
          "api          ClusterIP   10.96.72.41    <none>        8080/TCP       18m",
        ].join("\n"),
        exitCode: 0,
      };
    }

    if (
      normalized ===
      "kubectl get namespaces" ||
      normalized ===
      "kubectl get namespace"
    ) {
      return {
        command,
        output: [
          "NAME              STATUS   AGE",
          "default           Active   12d",
          "kube-node-lease   Active   12d",
          "kube-public       Active   12d",
          "kube-system       Active   12d",
        ].join("\n"),
        exitCode: 0,
      };
    }

    if (
      normalized ===
      "kubectl describe pod web-7d8c9f6b4d-x2k7m"
    ) {
      return {
        command,
        output: [
          "Name:             web-7d8c9f6b4d-x2k7m",
          "Namespace:        default",
          "Status:           Running",
          "IP:               10.244.0.12",
          "Node:             kubeza-k8s",
          "Containers:",
          "  web:",
          "    Image:          nginx:alpine",
          "    Port:           80/TCP",
          "    State:          Running",
          "    Ready:          True",
        ].join("\n"),
        exitCode: 0,
      };
    }

    if (
      normalized ===
      "kubectl get pods -o wide"
    ) {
      return {
        command,
        output: [
          "NAME                     READY   STATUS    IP           NODE",
          "web-7d8c9f6b4d-x2k7m     1/1     Running   10.244.0.12  kubeza-k8s",
          "api-5c7d8b9f76-q4p2n     1/1     Running   10.244.0.13  kubeza-k8s",
          "redis-0                  1/1     Running   10.244.0.14  kubeza-k8s",
        ].join("\n"),
        exitCode: 0,
      };
    }

    if (
      normalized ===
      "kubectl config current-context"
    ) {
      return {
        command,
        output: "kubeza-practice",
        exitCode: 0,
      };
    }

    if (
      normalized ===
      "kubectl config get-contexts"
    ) {
      return {
        command,
        output: [
          "CURRENT   NAME               CLUSTER        AUTHINFO",
          "*         kubeza-practice    kubeza-k8s     kubeza-user",
        ].join("\n"),
        exitCode: 0,
      };
    }

    if (
      normalized ===
      "kubectl get all"
    ) {
      return {
        command,
        output: [
          "NAME                            READY   STATUS    RESTARTS   AGE",
          "pod/web-7d8c9f6b4d-x2k7m         1/1     Running   0          18m",
          "pod/api-5c7d8b9f76-q4p2n         1/1     Running   0          18m",
          "pod/redis-0                      1/1     Running   0          18m",
          "",
          "NAME                 TYPE        CLUSTER-IP     EXTERNAL-IP   PORT(S)",
          "service/kubernetes   ClusterIP   10.96.0.1      <none>        443/TCP",
          "service/web          NodePort    10.96.24.18    <none>        80:30080/TCP",
          "service/api          ClusterIP   10.96.72.41    <none>        8080/TCP",
          "",
          "deployment.apps/web   2/2     2            2           18m",
          "deployment.apps/api   2/2     2            2           18m",
        ].join("\n"),
        exitCode: 0,
      };
    }

    if (normalized === "pwd") {
      return {
        command,
        output: "/home/ubuntu",
        exitCode: 0,
      };
    }

    if (normalized === "whoami") {
      return {
        command,
        output: "ubuntu",
        exitCode: 0,
      };
    }

    if (normalized === "hostname") {
      return {
        command,
        output: HOST,
        exitCode: 0,
      };
    }

    if (normalized === "ls") {
      return {
        command,
        output:
          "Desktop  Documents  Downloads  k8s  labs  practice",
        exitCode: 0,
      };
    }

    if (normalized === "help") {
      return {
        command,
        output: [
          "Kubeza Kubernetes Practice",
          "",
          "Explore the Kubernetes cluster from your terminal.",
          "",
          "Try commands such as:",
          "  kubectl cluster-info",
          "  kubectl get nodes",
          "  kubectl get pods",
          "  kubectl get deployments",
          "  kubectl get svc",
          "  kubectl get namespaces",
          "  kubectl describe pod web-7d8c9f6b4d-x2k7m",
          "  kubectl get all",
        ].join("\n"),
        exitCode: 0,
      };
    }

    if (
      normalized.startsWith("kubectl ")
    ) {
      return {
        command,
        output:
          `kubectl: '${command.slice(8)}' is not a simulated command in this practice environment.`,
        exitCode: 1,
      };
    }

    return {
      command,
      output:
        `bash: ${command}: command not found`,
      exitCode: 127,
    };
  }

  reset(): void {}
}