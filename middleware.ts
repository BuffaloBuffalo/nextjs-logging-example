import { NextRequest, NextResponse } from "next/server";
import { context } from "./app/context";

// could be uuid() or anything similar
function generateRandomNumber() {
  const randomNumber = Math.floor(Math.random() * 999999999) + 1_000_000;
  return randomNumber;
}

export function middleware(request: NextRequest) {
  const uuid = request.headers.get('x-uuid') || generateRandomNumber();
  const store = new Map();
  store.set('uuid', uuid);
  context.run(store, () => {
    const storeWithinAsyncContext= context.getStore() || new Map();
    console.log('<raw console.log>: context.getStore().get(uuid):', storeWithinAsyncContext.get('uuid'));
    return NextResponse.next();
  });
}
