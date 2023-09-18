from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework import status

from ..serializers import ExpenseSerializer
from ..models import Expense


class ExpenseApiView(APIView):
    permission_classes = (IsAuthenticated,)
    serializer_class = ExpenseSerializer

    def get(self, request: Request):
        available_subcategories = Expense.objects.filter(user=request.user)
        serialized_categories = self.serializer_class(available_subcategories, many=True)
        return Response(data=serialized_categories.data, status=status.HTTP_200_OK)

    def post(self, request: Request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.validated_data['user'] = request.user
            serializer.save()
            return Response(status=status.HTTP_200_OK, data=serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
