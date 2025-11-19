type Handler<Payload = void> = (payload?: Payload) => void;

class EventBus {
  private listeners = new Map<string, Set<Handler>>();

  on<T = void>(event: string, handler: Handler<T>) {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, new Set());
    }
    const handlers = this.listeners.get(event)!;
    handlers.add(handler as Handler);

    return () => this.off(event, handler);
  }

  off<T = void>(event: string, handler: Handler<T>) {
    const handlers = this.listeners.get(event);
    if (!handlers) return;
    handlers.delete(handler as Handler);
    if (handlers.size === 0) {
      this.listeners.delete(event);
    }
  }

  emit<T = void>(event: string, payload?: T) {
    const handlers = this.listeners.get(event);
    if (!handlers) return;
    handlers.forEach((handler) => {
      try {
        handler(payload);
      } catch (error) {
        // Swallow handler errors so one faulty listener doesn't break others.
        console.warn(`[eventBus] handler for "${event}" failed`, error);
      }
    });
  }
}

export const eventBus = new EventBus();

